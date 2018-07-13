function validar() {
  let usuario = document.getElementById('email').value;
  let password = document.getElementById('password').value;
 
  if (usuario === 'alejandra' && password === 'admin') {
    return window.location='index.html'
  }
  else {
    alert ('Verifique sus datos');
  }
 }