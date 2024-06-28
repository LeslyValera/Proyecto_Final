//import { Link } from "react-router-dom";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const feather = require('feather-icons');

function Header() {
  setTimeout(() => {
    feather.replace();
  }, 1000);

  return (
    <Navbar expand="lg" className=" barra-navegacion">
    <Container fluid>
      <Navbar.Brand href="#InicioPagina" style={{ color: '#fff', fontFamily: 'Arial', fontWeight: 'bold', fontSize: '24px' }}>
        Concept Store
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#Inicio" style={{ color: '#fff', fontFamily: 'Arial' }}>
            <i data-feather="home"></i> Inicio
          </Nav.Link>
          <NavDropdown title={<span className='text-navbar-1' style={{ color: '#fff', fontFamily: 'Arial' }}> Maquillaje</span>} id="navbarScrollingDropdown">
            <NavDropdown.Item href="#Ojos" className='text-navbar-1'>
              Ojos
            </NavDropdown.Item>
            <NavDropdown.Item href="#Labios" className='text-navbar-1'>
              Labios
            </NavDropdown.Item>
            <NavDropdown.Item href="#Rostro" className='text-navbar-1'>
              Rostro
            </NavDropdown.Item>
            <NavDropdown.Item href="#Cejas" className='text-navbar-1'>
              Cejas
            </NavDropdown.Item>
          </NavDropdown>
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
          <Nav.Link href="#Ayuda" style={{ color: '#fff', fontFamily: 'Arial' }}>
            Perfumes
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
  <div className="position-relative w-100">
    <Form.Control
      type="search"
      placeholder="¿Qué deseas buscar?"
      className="me-1 barra-busqueda pe-4"
      aria-label="¿Qué deseas buscar?"
    />
    <Button className="position-absolute end-0 top-50 translate-middle-y me-2 p-0 bg-transparent border-0" aria-label="Buscar">
      <i data-feather="search" className="text-black"></i>
    </Button>
  </div>
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