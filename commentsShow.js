// Obtener los comentarios del Local Storage
var comentariosGuardados = localStorage.getItem("comentarios");
var comentarios = [];

if (comentariosGuardados) {
  comentarios = JSON.parse(comentariosGuardados);
}

// Mostrar los comentarios en la segunda vista
var comentariosContainer = document.getElementById("comentariosContainer");

function mostrarComentarios() {
  comentariosContainer.innerHTML = "";

  comentarios.forEach(function (comentarioObj, index) {
    var comentarioElement = document.createElement("div");
    comentarioElement.classList.add("hola-div");
    

    var nombreElement = document.createElement("strong");
    nombreElement.textContent = comentarioObj.nombre;
    comentarioElement.appendChild(nombreElement);

    var comentarioTextElement = document.createElement("p");
    comentarioTextElement.textContent = comentarioObj.comentario;
    comentarioElement.appendChild(comentarioTextElement);

    var borrarBtn = document.createElement("button");
    borrarBtn.classList.add("pro-btn");
    borrarBtn.textContent = "Delete";
    borrarBtn.addEventListener("click", function () {
      borrarComentario(index);
    });
    comentarioElement.appendChild(borrarBtn);

    comentariosContainer.appendChild(comentarioElement);
  });
}

function borrarComentario(index) {
  comentarios.splice(index, 1);
  localStorage.setItem("comentarios", JSON.stringify(comentarios));
  mostrarComentarios();
}

// Llamar a la función para mostrar los comentarios al cargar la página
mostrarComentarios();