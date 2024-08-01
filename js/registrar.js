const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const regist = document.getElementById("regist");


const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || [];

regist.addEventListener("click", function () {

    let lista = {
        nombre: nombre.value,
        email: email.value,
        pass: pass.value
    };

    listaUsuarios.push(lista);
    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));

    window.location = "http://127.0.0.1:5500/Proyecto/login.html";

});
