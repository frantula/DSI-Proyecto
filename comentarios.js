function agregarComentario() {
 
    var comentarioInput = document.getElementById("comentario-input").value;
   
    if (comentarioInput === "") {
    return;
    }
   
    var contenedorComentarios = document.getElementById("contenedor-comentarios");
   
    var nuevoComentario = document.createElement("div");
  
    nuevoComentario.innerHTML = comentarioInput;
   
    nuevoComentario.classList.add("comentario");
  
    contenedorComentarios.appendChild(nuevoComentario);

    document.getElementById("comentario-input").value = "";
    }