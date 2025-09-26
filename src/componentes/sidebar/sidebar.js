export const componenteSidebar = () => {
  const cerrarSesion = document.getElementById("cerrarSesion");
  const sidebar = document.querySelector('.sidebar');
  const rayBlanca = document.querySelector('.rayita__blanca');
  const rayVerde = document.querySelector('.rayita__verde');
  cerrarSesion.addEventListener('click', () => {
    localStorage.clear();
    sidebar.remove();
    rayBlanca.remove();
    rayVerde.remove();
    window.location.href = `#/LogeoAdmin`
  });
};