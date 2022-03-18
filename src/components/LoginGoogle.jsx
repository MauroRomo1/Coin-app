import React from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";

const LoginGoogle = () => {
  let navigate = useNavigate();

  const responseGoogle = (response) => {
    if (response?.error) {
      console.warn("error en el logeo");
    } else {
      console.log("Usuario autenticado :)");
      localStorage.setItem("auth", JSON.stringify(response.accessToken));
      localStorage.setItem("user", JSON.stringify(response.profileObj));
      navigate("/");
    }
  };

  return (
    <GoogleLogin
      clientId="20173785303-f04gsap2s0pc7pd80tv7hubv5u093990.apps.googleusercontent.com"
      buttonText="Iniciar sesión con Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default LoginGoogle;
