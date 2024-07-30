const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const regist = document.getElementById("regist");


 const listaUsuarios = listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"))||[]

  listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"))||[]


 
regist.addEventListener("click", function () { 

    let lista = {
        nombre:nombre.value,
        email:email.value,
        pass:pass.value
}
     lista.push(listaUsuarios)
 
 console.log(listaUsuarios)
 lista = JSON.parse(localStorage.setItem("listaUsuarios"))

})
