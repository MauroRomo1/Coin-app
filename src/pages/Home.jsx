import React, { useEffect, useState } from "react";
import { getCoins } from "../helpers/coinFetch";

import TableContent from "../components/TableContent";
import CoinPagination from "../components/CoinPagination";

const Home = () => {
  const [coins, setCoins] = useState({
    loading: true,
    datos: [],
  });

  const [update, setUpdate] = useState(false);

  const [pagina, setPagina] = useState(0);

  useEffect(() => {
    getCoins(pagina).then((respuesta) => {
      setCoins({
        loading: false,
        datos: respuesta,
      });
    });
  }, [update, pagina]);

  return (
    <div className="container">
      <div className="row"></div>
      <div className="row mt-5">
        <div className="col">
          {coins.loading ? (
            <h3 className="text-center text-white">Cargando informacion...</h3>
          ) : (
            <>
              <TableContent
                coins={coins}
                setUpdate={setUpdate}
                update={update}
              />
              <CoinPagination pagina={pagina} setPagina={setPagina} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
