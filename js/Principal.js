const fecha = document.getElementById("fecha");

const evento = document.getElementById("evento");

const tarea = document.getElementById("tarea");
const guardar = document.getElementById("guardar");




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

