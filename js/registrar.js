const user = document.getElementById("email")
const pass = document.getElementById("pass")
const regist = document.getElementById("regist")


listaUsuarios = []

 
regist.addEventListener("click", function () { 

    let lista = {
        user:email.value,
        pass:pass.value

    }
 listaUsuarios.push(lista)
 
 console.log(listaUsuarios)
    

})
