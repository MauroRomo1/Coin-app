import React, { useEffect } from "react";
import LoginGoogle from "../components/LoginGoogle";
import logo from "../img/coincap.png";

const LoginScreen = () => {
  useEffect(() => {
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
  }, []);

  return (
    <div className="container">
      <div className="row card-login">
        <div className="col-12 col-md-6 ">
          <div className="card shadow-lg ">
            <div className="d-flex justify-content-center py-3 bg-light">
              <img src={logo} className="card-img-top" alt="logo" />
            </div>

            <div className="card-body">
              <h5 className="card-title text-center">Inicio de sesión</h5>
              <form>
                <div className="form-group mb-3">
                  <label>
                    <b>Correo electrónico</b>
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="example@example.com.ar"
                    name="email"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label>
                    <b>Contraseña</b>
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Ingrese su contraseña..."
                    required
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-coin">Iniciar</button>
                </div>
              </form>
            </div>
            <div className="text-center bg-light py-3">
              <LoginGoogle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
