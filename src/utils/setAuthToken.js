import axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    // Aplicar token de autorización a cada solicitud si está conectado
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Eliminar encabezado de autenticación
    delete axios.defaults.headers.common["Authorization"];
  }
};
export default setAuthToken;
