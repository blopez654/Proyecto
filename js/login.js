const correo = document.getElementById("correo");
const pass = document.getElementById("pass");
const iniciar = document.getElementById("iniciar");


const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || [];



iniciar.addEventListener("click",function () {

    
  for (let index = 0; index < listaUsuarios.length; index++) {
    
        if (listaUsuarios[index].email === correo.value && listaUsuarios[index].pass === pass.value) {
            
            window.location ="http://127.0.0.1:5500/Principal.html";
        }
    }
    
})

