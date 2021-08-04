import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import EditarMascotaModal from "./EditarMascotaModal";

const MascotaCard = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const eliminarMascota = () => {
    props.onDelete(props.obj._id);
  };

  const actualizarMascota = (mascotaId, mascota) => {
    props.onUpdate(mascotaId, mascota);
    handleClose();
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Header>{props.obj.name}</Card.Header>
        <Card.Img
          variant="top"
          width={170}
          height={150}
          alt="171x180"
          src={`data:${props.obj.imagen.contentType};base64,${props.obj.imagen.data}`}
        />
        <Card.Body>
          <Card.Text>
            {props.obj.descripcion}, tiene {props.obj.edad} años, es{" "}
            {props.obj.sexo}, de tamaño {props.obj.tamanho}.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="success" onClick={handleShow}>
            Editar
          </Button>

          <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            backdrop="static"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header className="justify-content-center">
              <Modal.Title>EDITAR MASCOTA</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Modal.Body>
                <EditarMascotaModal
                  estado={show}
                  mascotaId={props.obj._id}
                  actualizarMascota={actualizarMascota}
                  handleClose={handleClose}
                />
              </Modal.Body>
            </Modal.Body>
          </Modal>

          <Button onClick={eliminarMascota} variant="danger">
            Eliminar
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default MascotaCard;
