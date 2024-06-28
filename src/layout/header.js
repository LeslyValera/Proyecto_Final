import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';  // Se agregó para usar el useNavigate

const feather = require('feather-icons');

function Header() {
  const navigate = useNavigate();  // Esta línea se agregó para inicializar useNavigate

  setTimeout(() => {
    feather.replace();
  }, 1000);

  const handleNavigation = (categoria) => {
    navigate(`/catalogo/${categoria}`);
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className='barra-navegacion'>
        <Navbar.Brand onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <img src="https://i.imgur.com/sDzEkiR.png"  style={{ height: '80px', marginRight: '5px' }} fluid />
          <span style={{ color: '#fff', fontFamily: 'Arial', fontWeight: 'bold', fontSize: '20px' }}></span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={() => navigate('/')} style={{ color: '#fff', fontFamily: 'Arial', cursor: 'pointer' }}><i data-feather="home"></i> Inicio</Nav.Link>
            {            /* Se actualizó el uso de navigate en el enlace "Inicio" onClick={() => navigate('/')} */}

            <NavDropdown title={<span className='text-navbar-1' style={{ color: '#fff', fontFamily: 'Arial' }}> Maquillaje</span>} id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => handleNavigation('Ojos')} className='text-navbar-1'>
                Ojos
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavigation('Labios')} className='text-navbar-1'>
                Labios
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavigation('Rostro')} className='text-navbar-1'>
                Rostro
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavigation('Cejas')} className='text-navbar-1'>
                Cejas
              </NavDropdown.Item>
            </NavDropdown>

            {/* Menú para skincare */}
            <NavDropdown title={<span className='text-navbar-1' style={{ color: '#fff', fontFamily: 'Arial' }}>Skincare</span>} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#Productos/Hidrantantes" className='text-navbar-1'>
                Limpieza facial
              </NavDropdown.Item>
              <NavDropdown.Item href="#Productos/Tratamiento" className='text-navbar-1'>
                Hidratación
              </NavDropdown.Item>
              <NavDropdown.Item href="#Productos/Proteccion" className='text-navbar-1'>
                Protección Solar
              </NavDropdown.Item>
              <NavDropdown.Item href="#Productos/Limpieza" className='text-navbar-1'>
                Tratamientos
              </NavDropdown.Item>
            </NavDropdown>

            {/* Menú para Cuidado capilar */}
            <NavDropdown title={<span className='text-navbar-1' style={{ color: '#fff', fontFamily: 'Arial' }}>Cuidado Capilar</span>} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#Productos/Hidrantantes" className='text-navbar-1'>
                Limpieza Capilar
              </NavDropdown.Item>
              <NavDropdown.Item href="#Productos/Tratamiento" className='text-navbar-1'>
                Tratamientos Capilares
              </NavDropdown.Item>
              <NavDropdown.Item href="#Productos/Proteccion" className='text-navbar-1'>
                Estilización y acabado
              </NavDropdown.Item>
              <NavDropdown.Item href="#Productos/Limpieza" className='text-navbar-1'>
                Cuidado del Cuero Cabelludo
              </NavDropdown.Item>
            </NavDropdown>

            {/* Menú para Perfumes */}
            <Nav.Link href="#Ayuda" style={{ color: '#fff', fontFamily: 'Arial' }}>Perfumes</Nav.Link>

          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="¿Que deseas buscar?"
              className="me-1 barra-busqueda"
              aria-label="¿Que deseas buscar?"
            />
            <Button className='search-button'><i data-feather="search"></i></Button>
          </Form>

          <Nav className='carrito-compras'>
            <NavDropdown title={<span><i data-feather="shopping-cart" style={{ color: '#fff' }}></i></span>} align="end">
              <NavDropdown.Item>
                <div>
                  <p>CARRITO DE COMPRAS</p>
                  <hr />
                </div>
                <div className='container-button'>
                  <Button variant="info" type="Submit" className='cart-button'>Ir a mi carrito</Button>
                </div>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="ml-auto">
            <NavDropdown title={<span className='text-navbar-1'><i data-feather="user" style={{ color: '#fff' }}></i></span>} align="end">
              <NavDropdown.Item disabled>MI CUENTA</NavDropdown.Item>
              <NavDropdown.Item href="#perfil">Perfil</NavDropdown.Item>
              <NavDropdown.Item href="#pedidos">Mis Pedidos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#cerrar">Iniciar Sesión</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

