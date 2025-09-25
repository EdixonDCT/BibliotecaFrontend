import "./css/styles.css"; 
import { router } from "./router/router.js";
// import componenteHeader from "../src/componentes/header/index.html?raw";
// import { componenteHeader as header } from "./componentes/header/header.js";

// document.querySelector("body").insertAdjacentHTML("afterbegin", componenteHeader);

const main = document.querySelector("#app"); 

window.addEventListener("hashchange", async (e) => {
//   header();
  router(main);
});

window.addEventListener("DOMContentLoaded", async () => {
//   header();
  router(main);
});