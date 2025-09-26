export default async () => {
    const botonAsistencia = document.getElementById("botonAsistencia");
    const botonLogeo = document.getElementById("botonLogeo");
    const formulario = document.getElementById("form")

    botonAsistencia.addEventListener('click', () => window.location.href = `#/Asistencia`);
    botonLogeo.addEventListener('click', () => window.location.href = `#/LogeoAdmin`);

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        window.location.href = `#/Principal`
        localStorage.setItem("prueba", "true");
    })
}