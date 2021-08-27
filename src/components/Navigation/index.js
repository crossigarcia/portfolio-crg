import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Nav.css';

function Navigation({ pages = [], setCurrentPage, currentPage }) {
  console.log('test');
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Cecilia Rossi-Garc&#237;a</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              {pages.map((page) => (
                <Nav.Item>
                  <span
                    className={
                      currentPage.name === page.name
                        ? "nav-link current-page"
                        : "nav-link"
                    }
                    onClick={() => {
                      setCurrentPage(page);
                    }}
                  >
                    {page.name}
                  </span>
                </Nav.Item>
              ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

