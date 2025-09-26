import * as Auth from '../Views/Auth/index.js';
import PrincipalController from '../Views/Principal/PrincipalController.js'

export const routes = {
  Asistencia: {
    path: "Auth/Asistencia/index.html",
    controlador: Auth.AsistenciaController,
    private: false,
  },
  LogeoAdmin: {
    path: "Auth/LogeoAdmin/index.html",
    controlador: Auth.LogeoAdminController,
    private: false,
  },
  Registro: {
    path: "Auth/Registro/index.html",
    controlador: Auth.RegistroController,
    private: false
  },
  Principal: {
    path: "Principal/index.html",
    controlador: PrincipalController,
    private: false
  }
};