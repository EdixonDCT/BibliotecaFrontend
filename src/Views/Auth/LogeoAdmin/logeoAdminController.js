export default async () => {
    const botonAsistencia = document.getElementById("botonAsistencia");
    const botonLogeo = document.getElementById("botonLogeo");

    botonAsistencia.addEventListener('click', () => window.location.href = `#/Asistencia`);
    botonLogeo.addEventListener('click', () => window.location.href = `#/LogeoAdmin`);
}