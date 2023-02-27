import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faFileCode,
  faImage,
  faNetworkWired,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
//import Button from "react-bootstrap/Button";
import { Form, Modal } from "react-bootstrap";
// import ChatBox from "./ChatBox";
// import PopUp from "./PopUp";
import "./style.scss";

const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header>
        <h1>Importancia del SEO en los Portales Web</h1>
        <section>
          <p>
            El SEO es una herramienta fundamental para mejorar la visibilidad de
            tu sitio web en los motores de <br /> búsqueda y así aumentar el
            tráfico orgánico a tu página. En esta landing page te presentamos
            los <br />
            beneficios del SEO y algunos consejos para optimizar tu sitio web.
          </p>
        </section>
      </header>
      <main>
        <section>
          <h2>Consejos para mejorar el SEO de tu sitio web</h2>
          <ul>
            <li>
              <h5>
                <FontAwesomeIcon icon={faPen} /> Utiliza palabras clave
                relevantes en el contenido de tu sitio web.
              </h5>
            </li>
            <li>
              <h5>
                <FontAwesomeIcon icon={faImage} /> Optimiza tus imágenes para
                que se carguen rápidamente.
              </h5>
            </li>
            <li>
              <h5>
                <FontAwesomeIcon icon={faNetworkWired} /> Crea contenido de
                calidad y actualiza regularmente tu sitio web.
              </h5>
            </li>
            <li>
              <h5>
                <FontAwesomeIcon icon={faFileCode} /> Utiliza enlaces internos y
                externos en tus publicaciones.
              </h5>
            </li>
          </ul>
        </section>
        <section className="sectionTwo">
          <h2>¿Quieres mejorar el SEO de tu sitio web?</h2>
          <p>
            Contáctanos para recibir una consultoría personalizada y mejorar la
            visibilidad de tu sitio web.
          </p>
          <button onClick={handleShow}>Contactar</button>
        </section>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            {/* <Modal.Title>Modal heading</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Escribe tu nombre"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Escribe tu correo electrónico"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Escribe tu mensaje"
                  required
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button variant="primary" onClick={handleClose}>
              Enviar
            </button>
          </Modal.Footer>
        </Modal>
      </main>
      <footer>
        <p>Síguenos en redes sociales:</p>
        <ul>
          <li>
            <button>Facebook</button>
          </li>
          <li>
            <button>Twitter</button>
          </li>
          <li>
            <button>Instagram</button>
          </li>
        </ul>
        {/* <PopUp /> */}
        {/* <ChatBox /> */}
      </footer>
    </>
  );
};

export default App;
