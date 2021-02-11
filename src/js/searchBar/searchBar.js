import { fetchData } from "../apiFetchData/apiFetchData";
import debounce from "../utils/debounce";
import { displayData } from "../components/searchResult";

const searchBar = () => {
  const searchInput = document.querySelector(".search__input");
  const onInput = async (e) => {
    const searchResult = await fetchData(e.target.value);
    displayData(searchResult);
  };
  searchInput.addEventListener("input", debounce(onInput, 500));
};

searchBar();

export default searchBar;
