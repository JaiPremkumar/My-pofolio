import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header(){
    return(
        <>
         <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand className='text-light' href="#home">MY-FOLIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav >
            <Nav.Link className='text-light' >Home</Nav.Link>
            <Nav.Link className='text-light' >Contact</Nav.Link>
            <Nav.Link className='text-light' >Work</Nav.Link>
            <Nav.Link className='text-light' >About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}