const imail2 = document.getElementById("email")
const pass2 = document.getElementById("pass2")
const iniciar = document.getElementById("iniciar")



lista = JSON.parse(localStorage.getItem("listaUsuarios"))

for (let index = 0; index < listaUsuarios.length; index++) {
    if (listaUsuarios[index]. email === email.value === pass2 === pass2.value ) {
         alert("Si puedes entrar al sistema")

        
    }else{
        alert("No puedes entrar al sistema")
    }
     
    
    
}