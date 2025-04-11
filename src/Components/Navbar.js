import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Library App</Navbar.Brand> {/* Corrected */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto"> {/* Updated for Bootstrap 5 */}
          <Nav.Link as={Link} to="/">Book Search</Nav.Link>
          <Nav.Link as={Link} to="/book-reservation">Book Reservation</Nav.Link>
          <Nav.Link as={Link} to="/user-profile">User Profile</Nav.Link>
          <Nav.Link as={Link} to="/admin-dashboard">Admin Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/sign-up">Sign Up</Nav.Link>
          <Nav.Link as={Link} to="/sign-in">Sign in</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
