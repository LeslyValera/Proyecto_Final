import React from 'react';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import Makeup from './data/makeup.json';
import { useNavigate } from "react-router-dom";
import { addProductToCarrito } from './store/local';

const feather = require('feather-icons');

setTimeout(() => {
  feather.replace();
}, 1000);

const Main = () => {
  const navigate = useNavigate();

  const handleClick = (slug) => {
    navigate("/detalle/" + slug);
  };

   const handleAddToCarrito = (product) => {
    addProductToCarrito(product);
    alert(`${product.name} ha sido añadido al carrito.`);
  };


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

      
   <br></br>
   <hr></hr>
   <h2 className="text-center">Lo más vendido:</h2>
   <br></br>
  <Container fluid>
        <div class="row row-cols-1 row-cols-md-5 g-4">
          <div class="col">
          <div class="card">
          <img src="https://staticpe.natura.com/sites/default/files/styles/medium/public/products/118910_1_2.jpg?itok=91H4E5Jx" class="card-img-top" />
          <div class="card-body">
          <h5 class="card-title">Faces Booster Hidratante Facial</h5>
          <p class="card-text">S/ 32.50 - 35.</p>
          <Button variant="primary" onClick={() => handleAddToCarrito({
                  slug: 'faces-booster-hidratante-facial',
                  name: 'Faces Booster Hidratante Facial',
                  picture: 'https://staticpe.natura.com/sites/default/files/styles/medium/public/products/118910_1_2.jpg?itok=91H4E5Jx',
                  price: 32.50,
                  tamano: '35ml',
                  category: 'Facial',
                  description: 'Hidratante facial'
                })}>Añadir al carrito</Button>
        </div>
      </div>
    </div>
  
  <div class="col">
    <div class="card">
      <img src="https://staticpe.natura.com/sites/default/files/styles/medium/public/products/10155_1_18.jpg?itok=FDO6Ok-M" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">Delineador Líquido Negro</h5>
        <p class="card-text">S/ 26.60</p>
        <Button variant="primary" onClick={() => handleAddToCarrito({
        "slug": "delineador-liquido-negro",
        "name": "Delineador Líquido Negro",
        "category": "Ojos",
        "description": "Delineador líquido de larga duración",
        "picture": "https://staticpe.natura.com/sites/default/files/styles/medium/public/products/10155_1_18.jpg?itok=FDO6Ok-M",
        "price": 26.60,
        "tamano": "1ml"})}>Añadir al carrito</Button>
      </div>
    </div>
  </div>


  <div class="col">
    <div class="card">
      <img src="https://staticpe.natura.com/cdn/ff/ixCqsMijRxfcDl9RFnjCzjfkx_iW1OTd_OpvZi-UrnM/1718689457/public/products/89381_2_9.jpg" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">Faces Lápiz Dúo para Ojos y Cejas</h5>
        <p class="card-text">S/ 14.70 - 1g.</p>
        <Button variant="primary" onClick={() => handleAddToCarrito(product)}>Añadir al carrito</Button>
      </div>
    </div>
  </div>


  <div class="col">
    <div class="card">
      <img src="https://staticpe.natura.com/cdn/ff/dB_nwhSbx8OR_Gp2wdEWuva2-AC1BV9CAEbVKxDQFww/1719381036/public/styles/medium/public/products/151032_1_8.jpg?itok=nzNzfMby" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">Faces Kit mini lápiz delineador aqua 3</h5>
        <p class="card-text">S/ 49.70 - 600mg.</p>
        <Button variant="primary" onClick={() => handleAddToCarrito(product)}>Añadir al carrito</Button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://staticpe.natura.com/cdn/ff/FCWMnU96mivSJ6D1Y22CtbZZTZHgkKPdstT1pU3tmUs/1719382222/public/products/8885_2_9.jpg" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">Faces Polvo compacto mate</h5>
        <p class="card-text">S/ 49.50 - 6,5g.</p>
        <Button variant="primary" onClick={() => handleAddToCarrito(product)}>Añadir al carrito</Button>
      </div>
    </div>
  </div>


  <div class="col">
    <div class="card">
      <img src="https://staticpe.natura.com/cdn/ff/p3QmkWaFzV5rzqPk9EH0SZlEVroxND3tj55G0FtA19k/1719380699/public/products/9832_2_22.jpg" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">Súper Máscara Tint Lavable para Pestañas Faces</h5>
        <p class="card-text">S/ 34.50</p>
        <Button variant="primary" onClick={() => handleAddToCarrito(product)}>Añadir al carrito</Button>
      </div>
    </div>
  </div>


  <div class="col">
    <div class="card">
      <img src="https://staticpe.natura.com/sites/default/files/styles/medium/public/products/157257_1_8.jpg?itok=KyscZeoJ" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">Faces Gel glitter</h5>
        <p class="card-text">S/ 24.50 - 80ml</p>
        <Button variant="primary" onClick={() => handleAddToCarrito(product)}>Añadir al carrito</Button>
      </div>
    </div>
  </div>


  <div class="col">
    <div class="card">
      <img src="https://staticpe.natura.com/cdn/ff/pR2DU7WXCCv0sSbQPd3Q7IXznrWvF_5Ycj8qF2b0NPk/1719382965/public/products/3379_2_3.jpg" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">Faces Labial hidra</h5>
        <p class="card-text">S/ 25.50 - 3,5g.</p>
        <Button variant="primary" onClick={() => handleAddToCarrito(product)}>Añadir al carrito</Button>
      </div>
    </div>
  </div>


  <div class="col">
    <div class="card">
      <img src="https://i.pinimg.com/564x/e3/ce/e0/e3cee0d291de37bb773eba0958c9a165.jpg" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">Iluminadores/ highlighter - Essence</h5>
        <p class="card-text">S/ 20.90 - 16g.</p>
        <Button variant="primary" onClick={() => handleAddToCarrito(product)}> Añadir al carrito</Button>
      </div>
    </div>
  </div>


  <div class="col">
    <div class="card">
      <img src="https://staticpe.natura.com/sites/default/files/styles/medium/public/products/124226_1_2.jpg?itok=l3pwbSXc" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">Humor Desodorante Corporal en spray</h5>
        <p class="card-text">S/ 34.50 - 100ml.</p>
        <Button variant="primary" onClick={() => handleAddToCarrito(product)}>Añadir al carrito</Button>
      </div>
    </div>
  </div>
</div>

    </Container>
    </main>
  );
}

export default Main;