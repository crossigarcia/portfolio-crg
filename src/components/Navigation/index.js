import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Nav.css';

function Navigation({ pages = [], setCurrentPage, currentPage }) {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <span className="nav-title">Cecilia Rossi-Garc&#237;a</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <i className="fas fa-ellipsis-v fa-md"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {pages.map((page) => (
              <Nav.Item
                key={page.id}
                className={
                  currentPage.name === page.name
                    ? "navlink-current-page"
                    : "navlink"
                }
                onClick={() => {
                  setCurrentPage(page);
                }}
              >
                <span className="page-title">{page.name}</span>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

