const imail = document.getElementById("email")
const pass = document.getElementById("pass")
const regist = document.getElementById("regist")

listaUsuarios = []
regist.addEventListener("click", function () {

    let lista = {
        email:email.value,
        pass:pass.value

    }
    listaUsuarios.push(lista)
    localStorage.setItem("lista", lista)

})