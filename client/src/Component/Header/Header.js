import React from 'react'
import {Link} from 'react-router-dom'


export default function Header() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark pt-4 pb-4 " id="">
      <div className="container">
        <Link className="navbar-brand logo-text fs-2 navmain" style={{color: '#EB1D36'}} to="/">Ami Event</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-expanded="false" aria-label="Toggle navigation">
          <span  className="bi bi-caret-left" />
        </button>
        <div className="collapse navbar-collapse fs-2" id="navbarNav">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <Link className="nav-link me-4" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-4" to="/Treasure_hunt">Treasure hunt</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-4" to="/Quizzard">Quizzard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-4" to="/Code_Vita">Code_Vita</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-4" to="/Web_Dev">Web_Dev</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-4" to="/Rewards">Rewards</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title fs-2" id="offcanvasExampleLabel">AmiEvent</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body " id="navbarNav">
        <ul className="navbar-nav ms-auto p-5 fs-4">
        <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Treasure_hunt">Treasure hunt</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Quizzard">Quizzard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Code_Vita">Code_Vita</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Web_Dev">Web_Dev</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Rewards">Rewards</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Register">Register</Link>
            </li>
        </ul>
      </div>
    </div>
  </div>
    
  );
}
