//consumiendo el API para acceder a los datos de la BD

let url="http://localhost:8080/storeapi/v1/usuario"

let peticion={
    method:"GET",
    headers:{}
}

fetch(url,peticion)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    //recorriendo la respuesta para hacer render
    let fila=document.getElementById("fila")
    respuesta.forEach(function(usuario){
        let columna=document.createElement("div")
        columna.classList.add("col")
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","shadow","h-100")

        let nombreCliente=document.createElement("h3")
        nombreCliente.classList.add("text-center")
        nombreCliente.textContent=usuario.nombres

        let cedulaCliente=document.createElement("p")
        cedulaCliente.classList.add("text-center")
        cedulaCliente.textContent=usuario.cedula

        let correoCliente=document.createElement("p")
        correoCliente.classList.add("text-center")
        correoCliente.textContent=usuario.correo

        tarjeta.appendChild(nombreCliente)
        tarjeta.appendChild(cedulaCliente)
        tarjeta.appendChild(correoCliente)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    });
})
.catch(function(respuesta){
    console.log(respuesta)
})