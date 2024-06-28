import React from 'react';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import Makeup from './data/makeup.json';
import { useNavigate } from "react-router-dom";

const feather = require('feather-icons');

setTimeout(() => {
  feather.replace();
}, 1000);

const Main = () => {
  const navigate = useNavigate();

  const handleClick = (slug) => {
    navigate("/detalle/" + slug);
  }

  return (
    <main>
      <Carousel className="carousel-container">
        {
          Makeup.map(it => (
            <Carousel.Item
              key={it.slug}
              interval={1000}
              onClick={(e) => {
                e.preventDefault();
                handleClick(it.slug);
              }}
            >
              <img
                className='w-100 dark-image'
                src={it.picture}
                alt={it.name}
                style={{ height: '400px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3>{it.name}</h3>
                <p>{it.description}</p>
                <Button variant="primary">Ver detalle</Button>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        }
      </Carousel>

      {/*<Container fluid className="mt-4">
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="https://i.pinimg.com/564x/e3/ce/e0/e3cee0d291de37bb773eba0958c9a165.jpg" />
              <Card.Body>
                <Card.Title>Iluminadores/ highlighter - Essence</Card.Title>
                <Card.Text>S/ 20.90 - 16g.</Card.Text>
                <Button variant="primary">Añadir al carrito</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="https://i.pinimg.com/564x/96/cf/76/96cf76e779e331e2da59e32bbfae8844.jpg" />
              <Card.Body>
                <Card.Title>Polvo Compacto Fijador - Essence</Card.Title>
                <Card.Text>S/ 35.90 - 22g.</Card.Text>
                <Button variant="primary">Añadir al carrito</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="https://i.pinimg.com/564x/47/b2/9f/47b29fa15444bed648f63562c61606f2.jpg" />
              <Card.Body>
                <Card.Title>Base De Mousse Mate Natural - Essence</Card.Title>
                <Card.Text>S/ 39.90 - 25g.</Card.Text>
                <Button variant="primary">Añadir al carrito</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>*/}
    </main>
  );
}

export default Main;