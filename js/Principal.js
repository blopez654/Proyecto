const fecha = document.getElementById("fecha");

const actividad = document.getElementById("actividad");
const guardar = document.getElementById("guardar");


guardar.addEventListener("click",function () {
    
  const etiquetaP = document.createElement("p")
  etiquetaP.innerHTML = actividad.value

  cajaTarea.appendChild(etiquetaP)

   
  const btn =document.createElement("button")
  btn.innerHTML = "Eliminar"
  cajaTarea.appendChild(btn)

 btn.addEventListener("click",function () {
    cajaTarea.removeChild(btn) 
    cajaTarea.removeChild(etiquetaP)
    cajaTarea.removeChild(botonEdit)

})
  const botonEdit = document.createElement("button")
 botonEdit.innerHTML = "Editar"
 cajaTarea.appendChild(botonE)

 botonEdit.addEventListener("click",function () {
    const Editar = document.createElement("input")
    Editar.value.innerHTML = etiquetaP
    cajaTarea.appendChild(Editar)

})




})

