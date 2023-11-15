import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';

const NavBar = () => {
    return (
        <header>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container fluid className='top-header'>
                <Navbar.Brand href="#home"> <Logo /> </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#pricing">Inicio</Nav.Link>
                        <Nav.Link href="#pricing">Entradas</Nav.Link>
                        <Nav.Link href="#pricing">Platos fuertes</Nav.Link>
                        <Nav.Link href="#pricing">Bebidas</Nav.Link>
                        <Nav.Link href="#pricing">Postres</Nav.Link>
                        <Nav.Link href="#pricing">Menu infantil</Nav.Link>
                        <Nav.Link href="#pricing">  <CartWidget/> </Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
        </header>
    )
}

export default NavBar