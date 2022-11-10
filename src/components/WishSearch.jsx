import React, { useRef } from "react";
import Proptypes from "prop-types";
import { v4 as Uuidv4 } from "uuid";

function WishSearch({ whishes, onsearchWish }) {
  const searchText = useRef();

  return (
    <fieldset>
      <legend>Search Wish</legend>

      <input
        type="text"
        placeholder="Searh your wish"
        ref={searchText}
        onKeyUp={(event) => {
          if (event.key === "Enter" && searchText.current.value.length > 0) {
            console.log("buscar intro: " + searchText.current.value);
            return searchText.current.value;
          }
        }}
      />

      <button
        onClick={(event) => {
          if (searchText.current.value.length > 0) {
            console.log("buscar boton: " + searchText.current.value);
            return searchText.current.value;
          }
        }}
      >
        Buscar
      </button>

      <button
        onClick={(event) => {
          if (searchText.current.value.length > 0) {
            console.log("borrar boton");
            searchText.current.value = "";
            return searchText.current.value;
          }
        }}
      >
        X
      </button>
    </fieldset>
  );
}

WishSearch.propTypes = {
  onSearchWish: Proptypes.func,
};
WishSearch.defaultProps = {
  onSearchWish: () => {},
};

export default WishSearch;
