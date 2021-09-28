import React from 'react'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';
import BrandIcon from '../BrandIcon/BrandIcon';

const NavBar = () => {
return (
<div>
	<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
		<Container>
			<Navbar.Brand className="d-flex align-items-center" href="#home"><span><BrandIcon/></span> Tecnalink</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link href="#features">Inicio</Nav.Link>
					<Nav.Link href="#pricing">Productos</Nav.Link>
					<NavDropdown title="Categorias" id="collasible-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Conectividad</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Celulares</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Computadoras</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Outlet</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Nav>
					<Nav.Link href="#deets">Contacto</Nav.Link>
					<Nav.Link eventKey={2} href="#carrito">
						<CartWidget />
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
</div>
)
}

export default NavBar