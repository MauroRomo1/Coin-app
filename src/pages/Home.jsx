import React, { useEffect, useState } from "react";
import { getCoins } from "../helpers/coinFetch";

import TableContent from "../components/TableContent";

const Home = () => {
  const [coins, setCoins] = useState({
    loading: true,
    datos: [],
  });

  const [update, setUpdate] = useState(false);

  useEffect(() => {
    getCoins().then((respuesta) => {
      setCoins({
        loading: false,
        datos: respuesta,
      });
    });
  }, [update]);

  return (
    <div className="container">
      <div className="row"></div>
      <div className="row mt-5">
        <div className="col">
          {coins.loading ? (
            <h3 className="text-center text-white">Cargando informacion...</h3>
          ) : (
            <TableContent coins={coins} setUpdate={setUpdate} update={update} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
