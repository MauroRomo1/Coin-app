import { Navigate } from "react-router-dom";

import CoinNav from "../components/CoinNav";
const ProtectedRoutes = ({ children }) => {
  const isAuth = JSON.parse(localStorage.getItem("auth")) || null;

  return (
    <>
      <CoinNav />

      {isAuth ? children : <Navigate to="login" />}
    </>
  );
};

export default ProtectedRoutes;
