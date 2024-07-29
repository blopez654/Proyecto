const correo = document.getElementById("correo");
const pass = document.getElementById("pass");
const iniciar = document.getElementById("iniciar");



const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"))||[]

iniciar.addEventListener("click", function () {

    for (let index = 0; index < listaUsuarios.length; index++) {
        if (listaUsuarios[index]. email === email.value === pass === pass.value ) {
             alert("Si puedes entrar al sistema")
    
            
        }else{
            alert("No puedes entrar al sistema")
        }
         
        
        
    }
    
});

