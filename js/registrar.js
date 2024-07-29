const nombre = document.getElementById("nombre");
const user = document.getElementById("email");
const pass = document.getElementById("pass");
const regist = document.getElementById("regist");


 listaUsuarios = []

 let listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"))||[]


 
regist.addEventListener("click", function () { 

    let lista = {
        nombre:nombre.value,
        user:email.value,
        pass:pass.value

    }
 listaUsuarios.push(lista)
 
 console.log(listaUsuarios)
 lista = JSON.parse(localStorage.setItem("listaUsuarios"))

});
