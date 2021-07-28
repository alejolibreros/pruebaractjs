import axios from "axios";

const baseUrl = "http://localhost:4000/";

export async function getMascotas() {
  try {
    const response = await axios({
      url: `${baseUrl}mascotas/ver-mascota`,
      method: "GET",
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function saveMascota(mascotaData) {
  try {
    const response = await axios({
      url: `${baseUrl}mascotas/crear-mascota`,
      method: "POST",
      data: mascotaData,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getOneMascota(mascotaId) {
  try {
    const response = await axios({
      url: `${baseUrl}mascotas/editar-mascota/${mascotaId}`,
      method: "GET",
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function updateMascota(mascotaId, mascota) {
  try {
    const response = await axios.put(
      `${baseUrl}mascotas/actualizar-mascota/${mascotaId}`,
      mascota
    );
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function deleteMascota(mascotaId) {
  try {
    const response = await axios.put(
      `${baseUrl}mascotas/eliminar-mascota/${mascotaId}`
    );
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getAdoptantes() {
  try {
    const response = await axios({
      url: `${baseUrl}adopta/ver-adoptante`,
      method: "GET",
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function saveAdoptantes(adoptanteData) {
  try {
    const response = await axios({
      url: `${baseUrl}adopta/crear-adoptante`,
      method: "POST",
      data: adoptanteData,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}