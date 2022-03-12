export const getCoins = async () => {
  const resp = await fetch(
    "https://api.coincap.io/v2/assets?api-key=c1655cf1-fc12-4a1d-926d-9281876aeaa1&limit=10"
  );
  const { data } = await resp.json();
  return data;
};
