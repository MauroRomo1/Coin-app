import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { searchCoinByName } from "../helpers/coinFetch";

const CoinSearch = () => {
  let navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");

  const [options, setOptions] = useState([]);

  useEffect(() => {
    let termino = inputValue.trim();
    if (termino) {
      searchCoinByName(termino).then((response) => {
        setOptions(response);
      });
    }
  }, [inputValue]);

  const handleChange = ({ target }) => {
    setInputValue(target.value);
  };

  const searchCripto = () => {
    if (inputValue) {
      navigate(`/coin/${inputValue}`);
      setInputValue("");
    }
  };

  return (
    <div className="d-flex">
      <input
        className="form-control"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Type to search..."
        autoComplete="off"
        value={inputValue}
        onChange={handleChange}
      />
      <datalist id="datalistOptions">
        {options.map((item) => (
          <option key={item.id} value={item.id} />
        ))}
      </datalist>
      <button className="btn btn-success" onClick={searchCripto}>
        <i className="fa fa-search" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default CoinSearch;
