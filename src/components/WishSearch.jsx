import React, { useRef } from 'react';
import Proptypes from 'prop-types';

function WishSearch({ onSearchWish }) {
  const searchText = useRef();

  return (
    <fieldset>
      <legend>Search Wish</legend>

      <input
        type="text"
        placeholder="Searh your wish"
        ref={searchText}
        onKeyUp={(event) => {
          if (event.key === 'Enter' && searchText.current.value.length > 0) {
            //console.log(`buscar intro: ${searchText.current.value}`);
            onSearchWish(searchText.current.value);
          }
          if (event.key==="Escape" && searchText.current.value.length > 0) {
            searchText.current.value = '';

            onSearchWish(searchText.current.value);
          }
        }}
      />

      <button
        type="button"
        onClick={() => {
          if (searchText.current.value.length > 0) {
            //console.log(`buscar boton: ${searchText.current.value}`);
            onSearchWish(searchText.current.value);
          }
        }}
      >
        Buscar
      </button>
      <button
        type="button"
        onClick={() => {
          searchText.current.value = '';

          onSearchWish(searchText.current.value);
        }}
        style={{ color: "red", cursor: "pointer" }}

      >
        X
        {' '}
      </button>

    </fieldset>

  );
}

WishSearch.propTypes = {
  onSearchWish: Proptypes.func,
};
WishSearch.defaultProps = {
  onSearchWish: () => { },
};

export default WishSearch;
