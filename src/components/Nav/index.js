import React from "react";

function Nav({ pages = [], setCurrentPage, currentPage }) {
  return (
    
      <nav>
        <ul className="row">
          {pages.map((page) => (
            <li>
              <span
                onClick={() => {
                  setCurrentPage(page);
                }}
              >
                {page.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    
  );
}

export default Nav;
