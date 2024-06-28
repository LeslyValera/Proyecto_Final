import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <footer className="pie-pagina mt-2">
      <Container className='color-letras'>
        <Row className="py-3">
          <Col>
            <h5>COMUNIDAD</h5>
            <p>¡Únete a nuestra vibrante comunidad de amantes del maquillaje!. Comparte, aprender y conectarte con otros apasionados del maquillaje.</p>
          </Col>
          <Col>
            <h5>LEGAL</h5>
            <ul className='enlaces-c2'>
              <li><a href="#Teminos/Condiciones" className='enlaces-c2'>Teminos y comdiciones</a></li>
              <li><a href="#Privacidad" className='enlaces-c2'>Nuestras políticas de privacidad</a></li>
              <li><a href="#Catalogo" className='enlaces-c2'>Descargar catálogo virtual</a></li>
            </ul>
          </Col>
          <Col >
            <h5>NUESTRO CONTACTO</h5>
             <div className="d-flex justify-content-between">
              <p><a href="https://www.facebook.com/essencelatam/?brand_redir=139351150086" className='enlaces-c2'><i data-feather="facebook"></i></a></p>
              <p><a href="https://www.instagram.com/essence_cosmetics/" className='enlaces-c2'><i data-feather="instagram"></i></a></p>
              <p><a href="#Telefono" className='enlaces-c2'><i data-feather="phone"></i></a></p>
             </div>
            </Col>

        </Row>
      </Container>
    </footer>
  );
}

export default Footer;