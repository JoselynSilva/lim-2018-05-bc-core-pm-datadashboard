<<<<<<< HEAD
=======
// seleccionando elementos del html

const selectElement = document.getElementById('sedes');


fetch('../data/cohorts.json')
  .then(response => response.json())
  .then(json => {
     const sedes = json; 
     console.log(sedes.length);
     for(let i = 0; i < sedes.length; i ++) {
         const optionElements = document.createElement('option');
         const contenidoOption = document.createTextNode(sedes[i].id);
         optionElements.appendChild(contenidoOption);
         console.log(sedes[i].id);
         selectElement.appendChild(optionElements);
     }
  })
  .catch((err) => {
    // algo salió mal...
    console.error(err);
  });


>>>>>>> 0708a33675406c825362996638c646885b8f2f1c
