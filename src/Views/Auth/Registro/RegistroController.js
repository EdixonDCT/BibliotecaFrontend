export default async () => {
    const rol = document.getElementById("rol");
    const contenedorficha = document.getElementById("contenedorficha");
    const boton = document.getElementById("boton")

    contenedorficha.style.display = "none";
    boton.style.gridColumn = "1 / 3";
    boton.style.gridRow = "3 / 4";

    rol.addEventListener("change", () => {
        if (rol.value == "Aprendiz") {
            contenedorficha.style.display = "block";
            boton.style.gridColumn = "1 / 3";
            boton.style.gridRow = "4 / 5";
        }
        else {
            contenedorficha.style.display = "none";
            boton.style.gridColumn = "1 / 3";
            boton.style.gridRow = "3 / 4";
        }
    });

    const botonAsistencia = document.getElementById("botonAsistencia");
    const botonLogeo = document.getElementById("botonLogeo");

    botonAsistencia.addEventListener('click', () => window.location.href = `#/Asistencia`);
    botonLogeo.addEventListener('click', () => window.location.href = `#/LogeoAdmin`);
}