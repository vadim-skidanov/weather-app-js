import apiConfig from "../apiConfig/apiConfig";
import debounce from "../utils/debounce";
import { displayData } from "./../components/searchResult";

const bodyRow = () => {
  const searchBar = () => {
    const searchInput = document.querySelector(".search__input");
    const onInput = async (e) => {
      const searchResult = await fetchData(e.target.value);
      displayData(searchResult);
    };
    searchInput.addEventListener("input", debounce(onInput, 500));
  };

  const fetchData = async (query) => {
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

  searchBar();
};

bodyRow();

export default bodyRow;
