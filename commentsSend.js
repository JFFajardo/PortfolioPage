function guardarComentario(event) {
  event.preventDefault(); // Evitar el envío del formulario

  var nombre = document.getElementById("nombre").value;
  var comentario = document.getElementById("commentText").value;

  // Obtener comentarios existentes del Local Storage
  var comentariosGuardados = localStorage.getItem("comentarios");
  var comentarios = [];

  if (comentariosGuardados) {
    comentarios = JSON.parse(comentariosGuardados);
  }

  // Agregar el nuevo comentario al arreglo
  comentarios.push({ nombre: nombre, comentario: comentario });

  // Guardar el arreglo actualizado en el Local Storage
  localStorage.setItem("comentarios", JSON.stringify(comentarios));
  console.log(comentarios);

  // Vaciar los campos de entrada
  document.getElementById("nombre").value = "";
  document.getElementById("commentText").value = "";

  alert("Comentario guardado correctamente.");
}