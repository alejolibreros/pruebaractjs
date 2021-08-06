import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

// Registrar usuario
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("/users/register", userData)
    .then((res) => history.push("/login")) // redirección a iniciar sesión en el registro exitoso
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
// Iniciar sesión - obtener el token de usuario
export const loginUser = (userData) => (dispatch) => {
  axios
    .post("/users/login", userData)
    .then((res) => {
      // Guardar en localStorage
      // Establecer token en localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Establecer token en el encabezado Auth
      setAuthToken(token);
      // Decodificar el token para obtener datos del usuario
      const decoded = jwt_decode(token);
      // Establecer usuario actual
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
// Establecer usuario registrado
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};
// Carga de usuario
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};
// Cerrar la sesión del usuario
export const logoutUser = () => (dispatch) => {
  // Eliminar token del almacenamiento local
  localStorage.removeItem("jwtToken");
  // Eliminar el encabezado de autenticación para solicitudes futuras
  setAuthToken(false);
  // Establece el usuario actual en un objeto vacío {} que establecerá isAuthenticated en falso
  dispatch(setCurrentUser({}));
};
