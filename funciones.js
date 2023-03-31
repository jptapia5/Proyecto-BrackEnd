document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var telefono = document.getElementById('correo').value;
    var correo = document.getElementById('telefono').value;
    var motivo = document.getElementById('motivo').value;
    if (nombre.length == 0 || telefono.length == 0 || correo.length == 0 || motivo.length == 0) {
        alert('Tiene campos sin completar');}
      else {
            alert('El formulario fue llenado correctamente')
        }
        return;
    
    this.submit();
}