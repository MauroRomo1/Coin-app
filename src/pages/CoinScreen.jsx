import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import numeral from "numeral";

import CoinIcon from "../components/CoinIcon";

import { getCoinId } from "../helpers/coinFetch";

const CoinScreen = () => {
  let params = useParams();
  const { coinId } = params;

  const [coin, setCoin] = useState({
    loading: true,
    datos: {},
  });
  const { loading, datos } = coin;

  useEffect(() => {
    getCoinId(coinId).then((response) => {
      setCoin({
        loading: false,
        datos: response,
      });
    });
  }, [coinId]);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 col-md-8 offset-md-2">
          {loading ? (
            <div className="alert alert-primary text-center" role="alert">
              Cargando información...
            </div>
          ) : (
            <div className="card mb-3 table-coin">
              <div className="row g-0">
                <div className="col-md-4 logo-icon">
                  <CoinIcon symbol={datos.symbol} />
                  <h3>({datos.symbol})</h3>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="card-title">{datos.name}</h3>
                    <h5>#Rank {datos.rank}</h5>
                    <h3>
                      {numeral(datos.priceUsd).format("$0,0.00")}{" "}
                      <small
                        className={
                          datos.changePercent24Hr > 0
                            ? "text-success"
                            : "text-danger"
                        }
                      >
                        {parseFloat(datos.changePercent24Hr).toFixed(2)}%
                      </small>
                    </h3>
                    <div className="d-flex justify-content-between mt-3">
                      <div>
                        <span>Market Cap</span>
                        <h5>
                          {numeral(datos.marketCapUsd).format("($ 0.00 a)")}
                        </h5>
                      </div>
                      <div>
                        <span>Volume(24hs)</span>
                        <h5>
                          {numeral(datos.volumeUsd24Hr).format("($ 0.00 a)")}
                        </h5>
                      </div>
                      <div>
                        <span>Supply</span>
                        <h5>{numeral(datos.supply).format("($ 0.00 a)")}</h5>
                      </div>
                    </div>
                    <div className="d-grid mt-5">
                      <a
                        href={`https://coincap.io/assets/${datos.id}`}
                        className="btn btn-coin"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoinScreen;
