import React, { useRef } from "react";
import Proptypes from "prop-types";

function WishSearch( {onSearchWish} ) {
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
            onSearchWish(searchText.current.value);
           searchText.current.value = "";

          }
        }}
      />

      <button
        onClick={(event) => {
          if (searchText.current.value.length > 0) {
            console.log("buscar boton: " + searchText.current.value);
            onSearchWish(searchText.current.value);
           searchText.current.value = "";
            
          }
        }}
      >
        Buscar
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
