const contenedor = document.getElementById("productos");

fetch("http://localhost:3000/productos")
  .then(respuesta => respuesta.json())
  .then(productos => {
    console.log(productos);
    
    // Limpiamos el contenedor por si tiene algo previo
    contenedor.innerHTML = ""; 

    productos.forEach(producto => {
      // Usamos backticks ( ` ) para envolver el HTML
      contenedor.innerHTML += `
        <div>
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
        </div>
        <hr>
      `;
    });
  })
  .catch(error => console.error("Error al obtener productos:", error));