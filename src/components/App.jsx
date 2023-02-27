import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSquareYoutube,
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

import { Form, Modal } from "react-bootstrap";

// import PopUp from "./PopUp";
import { Carousel } from "react-bootstrap";
import MessageBox from "./MessageBox";
import "./style.scss";

const images = require.context("./assets/img", true);
const logo = require.context("./assets/img", true);

const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showChat, setShowChat] = useState(false);

  const handleCloseChat = () => setShowChat(false);
  const handleShowChat = () => setShowChat(true);

  return (
    <>
      <header>
        {" "}
        <img className="logo" src={logo(`./logo1.png`)} alt="s" />
      </header>
      <main>
        <section>
          <h1>Importancia del SEO en los Portales Web</h1>
          <section>
            <p>
              El SEO es una herramienta fundamental para mejorar la visibilidad
              de tu sitio web en los motores de <br /> búsqueda y así aumentar
              el tráfico orgánico a tu página. En esta landing page te
              presentamos los <br />
              beneficios del SEO y algunos consejos para optimizar tu sitio web.
            </p>
          </section>
        </section>
        <section className="sectionOne">
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
        <div className="empresa">
          <h3>
            Estas empresas confiaron en nosotros y han mejorado el SEO de sus
            páginas web:
          </h3>
        </div>

        <div className="carouselImg">
          <Carousel>
            <Carousel.Item>
              <img
                className="imgCarrusel d-block w-60"
                src={images(`./1.png`)}
                alt="s"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="imgCarrusel d-block w-60"
                src={images(`./2.png`)}
                alt="s"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="imgCarrusel d-block w-60"
                src={images(`./3.png`)}
                alt="s"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="imgCarrusel d-block w-60"
                src={images(`./4.png`)}
                alt="s"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <section className="sectionTwo">
          <h2>¿Quieres mejorar el SEO de tu sitio web?</h2>
          <p>
            <b>
              Contáctanos para recibir una consultoría personalizada y mejorar
              la visibilidad de tu sitio web.
            </b>
          </p>
          <button className="contactar" onClick={handleShow}>
            Contactar
          </button>
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

        <button onClick={handleShowChat} className="chatbox">
          Habla con un asesor
        </button>
        <Modal show={showChat} onHide={handleCloseChat}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <MessageBox />
          </Modal.Body>
        </Modal>
      </main>
      <footer>
        <ul>
          <li>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/home">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/feed/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com">
              <FontAwesomeIcon icon={faSquareYoutube} />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default App;
