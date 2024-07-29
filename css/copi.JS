if (user=="Briana" && pass=="1212") {

}else{
   alert("Datos Incorrectos")
}
   listaUsuarios.push(lista)
   localStorage.setItem("listaU", JSON.stringify(lista));
   lista = JSON.parse(localStorage.getItem("listaU"))



   //registrar
   let listaUsuarios = JSON.parse(localStorage.getItem("listaU")[])

   //login
   lista = JSON.parse(localStorage.getItem("listaU")[])


///principal

   boton.addEventListener("click", function () {

      const etiquetaP = document.createElement("p")
 
      etiquetaP.innerHTML = evento.value
 
      cajaEvento.appendChild(etiquetaP)
 
      const bot = document.createElement("button")
      bot.innerHTML = "Eliminar"
      cajaEvento.appendChild(bot)
 
      const edit = document.createElement("button")
      edit.innerHTML = "Editar"
      cajaEvento.appendChild(edit)
   
      bot.addEventListener("click", function () {
         cajaTarea.removeChild(bot)
         cajaTarea.removeChild(etiquetaP)
         cajaTarea.removeChild(edit)
 
      });
     edit.addEventListener("click",function () {
         const Editar = document.createElement("input")
         Editar.value.innerHTML = etiquetaP
         cajaTarea.appendChild(Edit)
     });
 
 });
 
 
 
 guardar.addEventListener("click", function () {
 
      const etiquetaP = document.createElement("p")
 
      etiquetaP.innerHTML = tarea.value
       
      cajaTarea.appendChild(etiquetaP)
       
      const btn =document.createElement("button")
      btn.innerHTML = "Eliminar"
      cajaTarea.appendChild(btn)
 
      const btn2 = document.createElement("button")
      btn2.innerHTML="Editar"
      cajaTarea.appendChild(btn2)
     
      btn.addEventListener("click", function () {
      cajaTarea.removeChild(btn)
      cajaTarea.removeChild(etiquetaP)
      cajaTarea.removeChild(btn2)
     
      })
 
 btn2.addEventListener("click",function () {
     const Editar = document.createElement("input")
     Editar.value.innerHTML = etiquetaP
     cajaTarea.appendChild(Editar)
     
 })
 
 
 
 });