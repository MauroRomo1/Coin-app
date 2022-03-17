import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error404 from "./pages/Error404";

import Home from "./pages/Home";

import LoginScreen from "./pages/LoginScreen";

import CoinScreen from "./pages/CoinScreen";

import ProtectedRoutes from "./routes/ProtectedRoutes";

import "./css/styles.css";
import "font-awesome/css/font-awesome.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route
          path="coin/:coinId"
          element={
            <ProtectedRoutes>
              <CoinScreen />
            </ProtectedRoutes>
          }
        />
        <Route path="login" element={<LoginScreen />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
