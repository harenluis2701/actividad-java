const boton = document.getElementById("btnLogin");

boton.addEventListener("click", () => {

    const correo = document.getElementById("correo").value;

    const password = document.getElementById("password").value;

    fetch("http://localhost:3000/usuarios")

    .then(respuesta => respuesta.json())

    .then(usuarios => {

        const usuarioExiste = usuarios.find(usuario =>

            usuario.correo === correo &&
            usuario.password === password

        );

        if(usuarioExiste){

            localStorage.setItem(
                "usuario",
                JSON.stringify(usuarioExiste)
            );

            window.location.href = "productos.html";

        }else{

            document.getElementById("mensaje")
            .innerText = "Correo o contraseña incorrectos";

        }

    });

});