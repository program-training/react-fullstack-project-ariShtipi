import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

export function NavBar() {
  return (
    <Navbar className="navbar navbar-dark bg-primary">
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/Trips" as={NavLink}>
            Trips
          </Nav.Link>
          <Nav.Link to="/registration" as={NavLink}>
            Register
          </Nav.Link>
          <Nav.Link to="/Login" as={NavLink}>
            Login
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
