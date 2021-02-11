import apiConfig from "../apiConfig/apiConfig";

export const fetchData = async (query) => {
  const { api, key, units } = apiConfig;

  try {
    const res = await fetch(`${api}?q=${query}&units=${units}&appid=${key}`);

    if (res.ok) {
      const data = await res.json();

      return data;
    }
    throw Error("City not found");
  } catch (e) {
    return null;
  }
};
