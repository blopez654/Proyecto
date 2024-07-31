const fecha = document.getElementById("fecha");
const seleccion = document.getElementById("seleccion");
const actividad = document.getElementById("actividad");
const guardar = document.getElementById("guardar");

 let listaTarea = JSON.parse(localStorage.getItem("listaTarea") || [])

let listaEvento = JSON.parse(localStorage.getItem("listaEvento") || [])


guardar.addEventListener("click",function () {
     
  if (select .value== "Tarea") {
    const etiquetaP = document.createElement("p")

    
   const divHijo = document.createElement("div")
   etiquetaP.innerHTML = actividad.value + " " + fecha.value
   divHijo.appendChild(etiquetaP)
   cajaTarea.appendChild(divHijo)

    const btn =document.createElement("button")
    btn.innerHTML = "Eliminar"
    divHijo.appendChild(btn)
    console.log(cajaTarea)
    btn.addEventListener("click",function () {
    divHijo.remove()
    
    })
  
    const botonEdit = document.createElement("button")
    botonEdit.innerHTML = "Editar"
    divHijo.appendChild(botonEdit)
    console.log(cajaTarea)
    botonEdit.addEventListener("click",function () {
    const Editar = document.createElement("input")  
     divHijo.appendChild(Editar)
     Editar.innerHTML = etiquetaP

     const btnG = document.createElement("button")
    btnG.innerHTML = "Guardar"
    divHijo.appendChild(btnG)
    btnG.addEventListener("click",function () {
    divHijo.appendChild(btnG)
    })
   btnG.addEventListener("click",function () {
   etiquetaP.innerHTML = Editar.value
    })
  })



  }else

   if (select.value == "Evento") {

    
     const etiqueta2 = document.createElement("p")

     const divHijo2 = document.createElement("div")
     etiqueta2.innerHTML = actividad.value + " " + fecha.value
     divHijo2.appendChild(etiqueta2)
     cajaEvento.appendChild(divHijo2)
 
     const btnEliminar =document.createElement("button")
     btnEliminar.innerHTML = "Eliminar"
     divHijo2.appendChild(btnEliminar)
     console.log(cajaEvento)
     btnEliminar.addEventListener("click", function () {
     divHijo2.remove()
     
     })
   
     const botonEdit2 = document.createElement("button")
     botonEdit2.innerHTML = "Editar"
     divHijo2.appendChild(botonEdit2)
     console.log(cajaEvento)
     botonEdit2.addEventListener("click", function () {
     const Editar = document.createElement("input")  
     divHijo2.appendChild(Editar)
      Editar.innerHTML = etiqueta2
 
    
      const btnGuardar = document.createElement("button")
     btnGuardar.innerHTML = "Guardar"
     divHijo2.appendChild(btnGuardar)
     btnGuardar.addEventListener("click", function () {
     divHijo2.appendChild(btnGuardar)
     })
    btnGuardar.addEventListener("click", function () {
   etiqueta2.innerHTML = Editar.value
  })
  })

 }

 })
  


  

