import apiConfig from "../../apiConfig/apiConfig";

const fetchData = async () => {
  const { api, q, key, units } = apiConfig;
  const res = await fetch(`${api}?q=${q}&units=${units}&appid=${key}`);
  const data = await res.json();
  return data;
};

fetchData();

export default fetchData;
