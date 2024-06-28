import React from 'react';
import { Carousel } from 'react-bootstrap';
import Makeup from './data/makeup.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';
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

  return <main>
      <Carousel>
          {
              Makeup.map(it => {
                return (<Carousel.Item interval={1000} onClick={(e) => {
                  e.preventDefault(); handleClick(it.slug)
              }}>
                  <img className='w-100 dark-image weight:100px' src={it.picture}></img>
                  <Carousel.Caption>
                      <h3>{it.name}</h3>
                      <p>{it.description}</p>
                      <button className="btn btn-primary" >Ver detalle</button>
                  </Carousel.Caption>
              </Carousel.Item>);
                    
              })
          }
      </Carousel>

  <Row className="py-4">
      <Card className="card-style" style={{ width: '17rem' }}>
      <Card.Img variant="info" src="https://i.pinimg.com/564x/e3/ce/e0/e3cee0d291de37bb773eba0958c9a165.jpg" />
      <Card.Body>
        <Card.Title>Iluminadores/ highlighter - Essence</Card.Title>
        <Card.Text>
          S/ 20.90 - 16g.
        </Card.Text>
        <Button className='button-list'>Añadir al carrito</Button>
      </Card.Body>
    </Card>

    <Card className="card-style" style={{ width: '17rem' }}>
      <Card.Img variant="info" src="https://i.pinimg.com/564x/96/cf/76/96cf76e779e331e2da59e32bbfae8844.jpg" />
      <Card.Body>
        <Card.Title>Polvo Compacto Fijador - Essence</Card.Title>
        <Card.Text>
          S/ 35.90 - 22g.
        </Card.Text>
        <Button className='button-list'>Añadir al carrito</Button>
      </Card.Body>
    </Card>

    <Card className="card-style" style={{ width: '17rem' }}>
      <Card.Img variant="info" src="https://i.pinimg.com/564x/47/b2/9f/47b29fa15444bed648f63562c61606f2.jpg" />
      <Card.Body>
        <Card.Title>Base De Mousse Mate Natural - Essence</Card.Title>
        <Card.Text>
          S/ 39.90 - 25g.
        </Card.Text>
        <Button className='button-list'>Añadir al carrito</Button>
      </Card.Body>
    </Card>

  </Row>

      
  </main >;
}


export default Main;