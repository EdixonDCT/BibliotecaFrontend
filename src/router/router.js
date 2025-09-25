import { routes } from "./routes";

export const router = async (elemento) => {
  const hash = location.hash.slice(2);
  const segmentos = hash.split("/").filter(seg => seg);

  if (segmentos.length === 0) {
    redirigirARuta("Asistencia");
    return;
  }

  const resultadoRuta = encontrarRuta(routes, segmentos);
  
  if (!resultadoRuta) {
    console.warn("Ruta inválida:", hash);
    elemento.innerHTML = `<h2>Ruta no encontrada</h2>`;
    return;
  }

  const [ruta, parametros] = resultadoRuta;

  if (ruta.private) {
    if (ruta.private && !localStorage.getItem('token')) {
      redirigirARuta("Asistencia");
      return;
    } else if (!puede(ruta) && ruta.private) {
      window.history.back();
      alert("Usted no puede ingresar porque no puede");
      return;
    }
  }

  await cargarVista(ruta.path, elemento);
  await ruta.controlador(parametros);
};

const redirigirARuta = (ruta) => { 
  location.hash = `#/${ruta}`;
};

const encontrarRuta = (routes, segmentos) => { 
  let rutaActual = routes;
  let rutaEncontrada = false;
  let parametros = {};

  if (segmentos.length === 3 && segmentos[2].includes("=")) { 
    parametros = extraerParametros(segmentos[2]);
    segmentos.pop();
  }

  segmentos.forEach(segmento => {
    if (rutaActual[segmento]) {
      rutaActual = rutaActual[segmento];
      rutaEncontrada = true;
    } else { 
      rutaEncontrada = false;
    }

    if (esGrupoRutas(rutaActual)) { 
      if (rutaActual["/"] && segmentos.length == 1) {
        rutaActual = rutaActual["/"]; 
        rutaEncontrada = true;
      } else {
        rutaEncontrada = false; 
      }
    }
  });

  return rutaEncontrada ? [rutaActual, parametros] : null;
};

const extraerParametros = (parametros) => {
  const pares = parametros.split("&");
  const params = {}; 
  pares.forEach(par => {
    const [clave, valor] = par.split("="); 
    params[clave] = valor;
  });
  return params; 
};

const cargarVista = async (path, elemento) => {
  try {
    const response = await fetch(`./src/Views/${path}`);
    if (!response.ok) throw new Error("Vista no encontrada");

    const contenido = await response.text();
    elemento.innerHTML = contenido; 
  } catch (error) {
    console.error(error); 
    elemento.innerHTML = `<h2>Error al cargar la vista</h2>`; 
  }
};

const esGrupoRutas = (obj) => {
  for (let key in obj) {    
    if (typeof obj[key] !== 'object' || obj[key] === null) { 
      return false; 
    }    
  }
  return true; 
}

const puede = (ruta) => { 
  const permisos = JSON.parse(localStorage.getItem('permisos'));
  const existe = permisos.some((nombre) => nombre == ruta.can);
  return existe;
}