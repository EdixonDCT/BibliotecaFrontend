export default async () => {
    const botonAsistencia = document.getElementById("botonAsistencia");
    const botonLogeo = document.getElementById("botonLogeo");
    const botonRegistro = document.getElementById("botonRegistro");

    botonAsistencia.addEventListener('click', () => window.location.href = `#/Asistencia`);
    botonLogeo.addEventListener('click', () => window.location.href = `#/LogeoAdmin`);
    botonRegistro.addEventListener('click', () => window.location.href = `#/Registro`);
}