import React from "react";
import './Nav.css';

function Nav({ pages = [], setCurrentPage, currentPage }) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <h1 className="navbar-brand mb-0 h1">
          <a href="/">Cecilia Rossi-Garc&#237;a</a>
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {pages.map((page) => (
              <li className="nav-item" key={page.id}>
                <span
                  className={currentPage.name === page.name ? 'nav-link current-page' : 'nav-link'}
                  onClick={() => {
                    setCurrentPage(page);
                  }}
                >
                  {page.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
