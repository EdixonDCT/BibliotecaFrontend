import "./css/styles.css";
import { router } from "./router/router.js";
import componenteSidebar from "../src/componentes/sidebar/index.html?raw";
import { componenteSidebar as sidebar } from "./componentes/sidebar/sidebar.js";

const main = document.querySelector("#app");
window.addEventListener("hashchange", async (e) => {
  let sidebarValidarExiste = document.querySelector('.sidebar');
  if (localStorage.length > 0 && !sidebarValidarExiste) {
    document.querySelector("body").insertAdjacentHTML("afterbegin", componenteSidebar)
  }
  let sidebarValidarControlador = document.querySelector('.sidebar');
  if (sidebarValidarControlador) sidebar();
  router(main);
});

window.addEventListener("DOMContentLoaded", async () => {
  let sidebarValidarExiste = document.querySelector('.sidebar');
  if (localStorage.length > 0 && !sidebarValidarExiste) {
    document.querySelector("body").insertAdjacentHTML("afterbegin", componenteSidebar)
  }
  let sidebarValidarControlador = document.querySelector('.sidebar');
  if (sidebarValidarControlador) sidebar();
  router(main);
});