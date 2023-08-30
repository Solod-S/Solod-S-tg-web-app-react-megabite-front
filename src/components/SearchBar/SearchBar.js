import { useEffect } from "react";
// import { productSearch } from "../../utils";
import {
  SearchBarForm,
  SearchBarButton,
  SearchBarInput,
} from "./Searchbar.styled";
import { IoIosSearch } from "react-icons/io";
import { useSearchParams } from "react-router-dom";

function Searchbar({ setCurrentSearchProduct }) {
  const [searchQuery, setSearchQuery] = useSearchParams();

  const currentQuery = searchQuery.get("query") ?? "";

  const handleSubmit = (event) => {
    event.preventDefault();
    const searcForm = event.currentTarget;
    const inputQuery = searcForm.elements.searchQuery.value;

    setSearchQuery({ query: inputQuery });
    searcForm.reset();
  };

  useEffect(() => {
    if (!currentQuery) {
      return;
    }

    setCurrentSearchProduct(currentQuery);
  }, [currentQuery, setCurrentSearchProduct]);

  return (
    <SearchBarForm onSubmit={handleSubmit}>
      <SearchBarInput
        type="text"
        autoComplete="off"
        autoFocus
        name="searchQuery"
        placeholder="Search movies"
      />
      <SearchBarButton type="submit">
        <IoIosSearch size={18} fill="#444444" />
      </SearchBarButton>
    </SearchBarForm>
  );
}

export default Searchbar;
