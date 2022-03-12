import React from "react";
import logo from "../img/coincap.png";

import { Link, link } from "react-router-dom";

const CoinNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container justify-content-between">
        <div>
          <img src={logo} alt="Logo de coincop" className="img-logo" />
        </div>
        <ul className="navbar-nav mb-2 mb-lg-0">
          <Link className="nav-link active" to="login">
            Cerrar sesión
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default CoinNav;
