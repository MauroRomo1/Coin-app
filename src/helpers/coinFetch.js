export const getCoins = async (pagina = 0) => {
  const resp = await fetch(
    `https://api.coincap.io/v2/assets?api-key=c1655cf1-fc12-4a1d-926d-9281876aeaa1&limit=10&offset=${pagina}`
  );
  const { data } = await resp.json();
  return data;
};

export const getCoinId = async (id) => {
  const resp = await fetch(`https://api.coincap.io/v2/assets/${id}`);
  const { data } = await resp.json();
  return data;
};

export const searchCoinByName = async (termino) => {
  const resp = await fetch(
    `https://api.coincap.io/v2/assets?api-key=c1655cf1-fc12-4a1d-926d-9281876aeaa1&limit=10&search=${termino}&Limit=10`
  );
  const { data } = await resp.json();
  return data;
};
