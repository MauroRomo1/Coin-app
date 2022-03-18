import React from "react";

const CoinPagination = ({ pagina, setPagina }) => {
  const paginacion = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const nextPage = () => {
    if (pagina < 90) {
      setPagina(pagina + 10);
    }
  };

  const prevPage = () => {
    if (pagina >= 10) {
      setPagina(pagina - 10);
    }
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className={pagina < 10 ? "page-item disable" : "page-item"}>
          <button className="page-link mx-2" onClick={prevPage}>
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </button>
        </li>
        {paginacion.map((pag, index) => (
          <li
            key={index}
            className={pag * 10 === pagina ? "page-item active" : "page-item"}
          >
            <button className="page-link" onClick={() => setPagina(pag * 10)}>
              {pag + 1}
            </button>
          </li>
        ))}

        <li className={pagina === 90 ? "page-item disable" : "page-item"}>
          <button className="page-link mx-2" onClick={nextPage}>
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default CoinPagination;
