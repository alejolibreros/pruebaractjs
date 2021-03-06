import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import FormularioMascotaModal from "./FormularioMascotaModal";
import ListarMascotas from "./ListarMascota";
import { Spinner } from "react-bootstrap";
import {
  saveMascota,
  getMascotas,
  deleteMascota,
  updateMascota,
} from "../services";

const Dashboard = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [mascotas, setMascotas] = useState([]);

  async function loadMascotas() {
    const response = await getMascotas();

    if (response.status === 200) {
      setMascotas(response.data);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    loadMascotas();
  }, []);

  const onSubmit = async (data) => {
    await saveMascota(data);
    loadMascotas();
  };

  const onDelete = async (data) => {
    await deleteMascota(data);
    loadMascotas();
  };

  const onUpdate = async (idMascota, data) => {
    await updateMascota(idMascota, data);
    loadMascotas();
  };

  const { user } = props.auth;

  const onLogoutClick = () => {
    props.logoutUser();
  };

  return (
    <div className="form-wrapper">
      <center className="mt-2">
        <h2 style={{ color: "white" }}>
          ¡Hola administrador {user.name.split(" ")[0]}!
        </h2>
      </center>

      <FormularioMascotaModal onSubmit={onSubmit} onLogoutClick={onLogoutClick} />

      {isLoading && (
        <div className="d-flex  justify-content-center mb-3">
          <Spinner animation="grow" />
        </div>
      )}

      {!isLoading && !mascotas.length && (
        <center className="d-flex  justify-content-center mb-3">
          <h3 style={{ color: "white" }}>No hay mascotas registradas...</h3>
        </center>
      )}

      {!isLoading && mascotas.length && (
        <ListarMascotas
          mascotas={mascotas}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      )}
    </div>
  );
};

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
