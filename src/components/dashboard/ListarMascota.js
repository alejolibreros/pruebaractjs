import React from "react";
import { Row } from "react-bootstrap";
import MascotaCard from "./MascotaCard";

const ListarMascotas = ({ mascotas, onDelete, onUpdate }) => {
  function DataCard() {
    return mascotas.map((res, i) => {
      return (
        <MascotaCard
          obj={res}
          key={i}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      );
    });
  }

  return (
    <>
      <Row
        xs={1}
        md={2}
        className="g-4 justify-content-center mb-2"
        style={{ marginRight: 0 }}
      >
        {DataCard()}
      </Row>
    </>
  );
};

export default ListarMascotas;
