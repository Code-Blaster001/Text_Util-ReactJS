import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  let NavBarStyle = {
    border: "2px solid maroon",
  };
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={NavBarStyle}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">{props.Home}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick=""to="/about">{props.aboutus}</Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === "light" ? "primary" : "success"} mx-3`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleModePrimary} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" onClick={props.toggleModePrimary}>Enable {`${props.mode === "light" ? "primary" : "light"} `}Mode</label>
          </div>
          <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"} mx-3`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" onClick={props.toggleMode}>Enable {`${props.mode === "light" ? "dark" : "light"} `}Mode</label>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-danger" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  Home: PropTypes.string.isRequired,
  aboutus: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: "Put something here",
  Home: "Here too",
  aboutus: "Here also"
};