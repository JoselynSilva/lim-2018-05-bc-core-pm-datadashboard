//DOM
const sedeLima = document.getElementById('sedeLima'),
      btnGeneral = document.getElementById('btnGeneral'),
      btnStudent = document.getElementById('btnStudent'),
      menuSede = document.getElementById('menuSede'),
      menuPromo = document.getElementById('menuPromo'),
      sedePromocion = document.getElementById('sedePromo'),
      menuGeneral = document.getElementById('menuGeneral'),
      totalAlumnas = document.getElementById('numAlumnas'),
      totalCursos = document.getElementById('numCursos'),
      menuStudent = document.getElementById('menuStudent'),
      menuProgress = document.getElementById('menuProgress'),
      tableStudent = document.getElementById('tableStudents'),
      studentContainer = document.getElementById('studentContainer'),
      btnOrder = document.getElementById('btnSort'),
      btnProgress = document.getElementById('btnProgress');


let searchUser = document.getElementById('searchUser');

const cohortsUrl = 'https://api.laboratoria.la/cohorts/',
      usersUrl = 'https://api.laboratoria.la/cohorts/lim-2018-03-pre-core-pw/users/',
      progressUrl = 'https://api.laboratoria.la/cohorts/lim-2018-03-pre-core-pw/progress/';

// llamar a la funcion
const getData = (callback) => {
      fetch(usersUrl)
            .then((responseU) => {
                  fetch(progressUrl)
                        .then((responseP) => {
                              fetch(cohortsUrl)
                                    .then((responseC) => {
                                          Promise.all([responseU.json(), responseP.json(), responseC.json()])
                                                .then(dataArray => {
                                                      const [users, progress, cohorts] = dataArray;
                                                      callback(users, progress, cohorts);
                                                })
                                    })
                        })
            })
}

const callbackGetData = (users, progress, cohorts) => {
      showInfo(cohorts);
      showStudent(users);
}
getData(callbackGetData);

searchUser.addEventListener('keypress', () => {
      getData(callback);
      options.search = searchUser.value;

});
btnOrder.addEventListener('click', () => {
      getData(callback);
})

// Eventos de Botones
sedeLima.addEventListener('click', () => {
      fetch('../data/cohorts.json')
            .then(function (response) {
                  return response.json();
            })
            .then(function (cohorts) {
                  cohorts.forEach(cohort => {
                        if (cohort.id.substring(0, 3) === 'lim') {//SubString del contenido de la cadena id de data (antes cohort.js)
                              sedePromocion.innerHTML += `<option value=${cohort.id}> ${cohort.id}</option>`; // VER BACKTIPS O Templates
                        }
                  })
            })
            .catch(error =>
                  console.error('Hay  errores', error));
      menuSede.style.display = 'none';
      menuPromo.style.display = 'block';
})

//Al seleccionar la promocion lim en la vista general, tbn se mostrara los graficos
sedePromocion.addEventListener('change', (e) => {
      if (e.target.value === 'lim-2018-03-pre-core-pw') {
            getData((cohorts, users, progress) => {
                  let options = {
                        cohort: '',
                        cohortData: {
                              users: '',
                              progress: ''
                        },
                        orderBy: '',
                        orderDirection: '',
                        search: ''
                  };

                  for (let i = 0; i < usersWithStats.length; i++) {
                        let row = '';
                        row += '<tr id="fila">';
                        row += '<th> NOMBRES </th>';
                        row += '<th> % COMPLETITUD GENERAL</th>';
                        row += '<th> EJERCICIOS </th>';
                        row += '<th> PROMEDIO QUIZZES </th>';
                        row += '<th> QUIZZES </th>';
                        row += '<th> LECTURAS </th>';
                        row += '</tr>';

                        let cohortId = sedePromocion.value;

                        selectCohort = cohorts.filter(
                              item => {
                                    return item.id === cohortId
                              });

                        options.cohort = selectCohort;
                        options.cohortData.users = users;
                        options.cohortData.progress = progress;
                        options.orderBy = orderBy.value;
                        options.orderDirection = orderDirection.value;
                        options.search = searchUser.value;

                        usersWithStats.forEach((user) => {
                              if (usersWithStats[i].hasOwnProperty('stats')) {
                                    row += '<tr id="listStudent">';
                                    row += '<td>' + user.name + '</td>';
                                    row += '<td>' + user.stats.percent + '</td>';
                                    row += '<td>' + user.stats.exercises.percent + '</td>';
                                    row += '<td>' + user.stats.quizzes.scoreAvg + '</td>';
                                    row += '<td>' + user.stats.quizzes.percent + '</td>';
                                    row += '<td>' + user.stats.reads.percent + '</td>';
                                    row += '</tr>';
                              }
                              tableStudent.innerHTML = row;
                        })
                  }
            })
            menuPromo.style.display = 'none';
            menuProgress.style.display = 'block';
      }
});

//Mostrar el numero de alumnas y cursos
const showInfo = (cohorts) => {
      cohorts.filter(function (cohort) { //Busca dentro de data
            if (cohort.id === 'lim-2018-03-pre-core-pw') { //Que los que tengan el id 'lim...
                  //A la etiqueta totalAlumnas imprimir el data.users
                  totalAlumnas.innerHTML = cohort.usersCount + '<br>Usuarios';
                  totalCursos.innerHTML = Object.keys(cohort.coursesIndex).length + '<br>Cursos'; ///en totalCursos imprimir: object keeys lee llaves dentro de los objetos, con length vemos cuantos objetos hay
            }
      })
}

const showStudent = (users) => {
      users = users.filter(users => users.role === 'student')
      for (user of users) {
            let containerStudent = document.createElement('div');
            let photoStudent = document.createElement('img');
            let nameStudent = document.createElement('h6');
            let img = 'img/girl.png';
            photoStudent.setAttribute('src', img);;
            nameUser = user.name;
            nameStudent.textContent = nameUser;
            infoStudent.textContent = 'Ver Informe';
            containerStudent.appendChild(photoStudent);
            containerStudent.appendChild(nameStudent);
            containerStudent.appendChild(infoStudent);
            studentContainer.appendChild(containerStudent);
      }
}

btnStudent.addEventListener('click', () => {
      menuGeneral.style.display = 'none';//APAREZCA LOS BOTONES DE MOSTRAR ESTUDIANTES Y CURSOS.. MIENTRAS NO
      menuPromo.style.display = 'none'; //TENDRIA QUE PONERLE A LOS button QUE DESPUES DE SELEECIONAR LA SEDE Y PROMO
      menuStudent.style.display = 'block';
});

btnGeneral.addEventListener('click', () => {
      menuStudent.style.display = 'none';
      menuProgress.style.display = 'none';
      menuGeneral.style.display = 'block';
});

btnProgress.addEventListener('click', () => {
      menuStudent.style.display = 'none';
      menuProgress.style.display = 'block';
})
 
