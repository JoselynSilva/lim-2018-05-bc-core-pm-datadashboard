// -----MENU DESPLEGABLE-----
let sideMenu = document.getElementById('side-menu'),
    sideMain = document.getElementById('container-principal');
    

let openSlideMenu = () => {
    sideMenu.style.width = '250px';
    // sideMain.style.marginLeft = '250px';
   
}

let closeSlideMenu = () => {
    sideMenu.style.width = '0';
    // sideMain.style.marginLeft = '0';
}

/********************************************** Seleccion del DOM************************************************ */
const mainWelcome = document.getElementById('main-welcome');
const mainCampus = document.getElementById('main-campus');
const mainStudents = document.getElementById('main-students');
const mainProgress = document.getElementById('main-progress');
const mainSquads = document.getElementById('main-squads');

const menuGeneral = document.getElementById('btnShowGeneral');
const menuStudents = document.getElementById('btnShowStudents');
const menuProgress = document.getElementById('btnShowProgress');
const menuSquads = document.getElementById('btnShowSquads');

const selectCampus = document.getElementById('selectCampus');
const selectCohorts = document.getElementById('selectCohorts');
const totalUser = document.getElementById('totalUser');
const totalCourse = document.getElementById('totalCourse');

const listTableStudent = document.getElementById('listTable');
const studentContainer = document.getElementById('studentContainer');

const searchUser = document.getElementById('searchUser');
const selectOrderBy = document.getElementById('orderBy');
const selectDirection = document.getElementById('orderDirection');


let options = {
    cohort: null,
    cohortData: {
        users: null,
        progress: null,
    },
    orderBy: '',
    orderDirection: '',
    search: ''
};
/**************************************************Funciones complementarias********************************** */

//---------XHR--------//
const getData = (str, url, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.addEventListener('load', event => {
        if (event.target.readyState === 4) {
            if (event.target.status !== 200) {
                return console.error(new Error(`HTTP error: ${event.target.status}`))
            } else {
                const response = JSON.parse(event.target.responseText);
                callback(str, response);
            }
        }
    })
    xhr.send();
}

/***********************************************Asociando eventos**************************************/

menuGeneral.addEventListener('click', e => {
    e.preventDefault();
    mainCampus.style.display = 'block';
    mainWelcome.style.display = 'none';
    mainStudents.style.display = 'none';
    mainProgress.style.display = 'none';
});

selectDirection.addEventListener('change', () => {
    options.orderDirection = selectDirection.value;
    let usersWithStats = processCohortData(options);
    showData(usersWithStats);
});

selectOrderBy.addEventListener('change', () => {
    options.orderBy = selectOrderBy.value;
    // let usersWithStats = processCohortData(options);
    // showData(usersWithStats);
});

searchUser.addEventListener('keyup', () => {
    options.search = searchUser.value;
    let usersWithStats = processCohortData(options);
    showData(usersWithStats);
});

const showData = (array) => {
    let template = '';
    array = array.filter(arr => arr.role === 'student');

    array.forEach(students => {
        template +=
            `<tr>
            <td> ${students.name} </td>
            <td> ${students.stats.percent} </td>
            <td> ${students.stats.reads.percent} </td>
            <td> ${students.stats.exercises.percent} </td>
            <td> ${students.stats.quizzes.percent} </td>
            <td> ${students.stats.quizzes.scoreAvg} </td>
         </tr>`;
    });
    listTableStudent.innerHTML = template;

    for (students of array) {
        let containerStudent = document.createElement('article');
        let photoStudent = document.createElement('img');
        let nameStudent = document.createElement('h6');
        let idStudent = document.createElement('p');
        let img = 'img/girl.png';
        photoStudent.setAttribute('src', img);
        idUser = students.id;
        nameUser = students.name;
        idStudent.textContent = idUser;
        nameStudent.textContent = nameUser;
        containerStudent.appendChild(photoStudent);
        containerStudent.appendChild(idStudent);
        containerStudent.appendChild(nameStudent);
        studentContainer.appendChild(containerStudent);
    }
}

const showProgress = (str, obj) => {
    options.cohortData.progress = obj;
    let usersWithStats = processCohortData(options);
    showData(usersWithStats);
}

const showUsers = (str, arr) => {
    options.cohortData.users = arr;
    getData(str, `https://api.laboratoria.la/cohorts/${str}/progress`, showProgress);
}

const showCohorts = (str, arr) => {
    const allCohorts = arr.filter(element => {
        return element.id.startsWith(str);
    });

    allCohorts.forEach(element => {
        selectCohorts.insertAdjacentHTML('beforeend', `<option value=${element.id}>${element.id}</option>`);
    })

    selectCohorts.addEventListener('change', e => {
        allCohorts.forEach(element => {
            if (element.id === e.target.value) {
                options.cohort = element;
                let numCourse = Object.keys(element.coursesIndex);
                totalUser.innerHTML = `<h4>${element.usersCount}</h4><p>Usuarixs</p>`;
                totalCourse.innerHTML = `<h4>${numCourse.length}</h4><p>Cursos</p>`;
            }
        })
        getData(e.target.value, `https://api.laboratoria.la/cohorts/${e.target.value}/users`, showUsers);
    })
}

const showCampus = (str, arr) => {
    arr.forEach(element => {
        selectCampus.insertAdjacentHTML('beforeend', `<option id=${element.id} value=${element.id}>${element.name}</option>`);
    });

    selectCampus.addEventListener('change', e => {
        console.log(e.target.value);
        getData(e.target.value, 'https://api.laboratoria.la/cohorts/', showCohorts);
    })

}

getData('', 'https://api.laboratoria.la/campuses/', showCampus);

menuStudents.addEventListener('click', () => {

    mainStudents.style.display = 'block';
    mainCampus.style.display = 'none';
    mainProgress.style.display = 'none';
    mainWelcome.style.display = 'none';
});

menuProgress.addEventListener('click', () => {
    mainProgress.style.display = 'block';
    mainCampus.style.display = 'none';
    mainStudents.style.display = 'none';
    mainWelcome.style.display = 'none';
});