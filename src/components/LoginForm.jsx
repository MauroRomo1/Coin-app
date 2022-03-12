import React from "react";

const LoginForm = () => {
  return (
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
  );
};

export default LoginForm;
