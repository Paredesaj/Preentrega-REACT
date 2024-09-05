import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <h2 style={{ color: 'Orange', fontSize: '25px' }}>
            <span style={{ color: 'darkorange' }}>STADIUM</span> CALZADO
          </h2>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/category/Women">Women</Nav.Link>
              <Nav.Link as={NavLink} to="/category/Men">Men</Nav.Link>
              <Nav.Link as={NavLink} to="/category/Kid">Kid</Nav.Link>
            </Nav>
            <CartWidget/>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
