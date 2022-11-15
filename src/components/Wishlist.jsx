import React, { useRef } from 'react';
import Proptypes from 'prop-types';
import WishItem from './WishItem';
import { v4 as Uuidv4 } from 'uuid';
import WishSave from './WishSave';
/**
 * Callback to run when a wish changes.
 * @callback onUpdate wish - Callback to run when a wish changes.
 * @param {Object} updatedWish - Wish with new values
 * @param {String} updatedWish.id - identifier for wish
 * @param {String} updatedWish.text - text of wish
 * 
 */
/**
 * Manage a wish list
 * @todo check array map function.
 * @param {Object[]} wishes - List of wishes
 * @param {String} wishes.id - identifier for wish
 * @param {String} wishes.text - text of wish
 * @param {onUpdateWish} callback - Callback to run when a wish changes.
 * @returns HTML with a wish list
 */
function Wishlist({ whishes, onUpdateWish, onRemoveWish, onSearchWish }) {
  const searchText = useRef();


  return (
    <fieldset>
      <legend>Search Wish</legend>

      <input
        type="text"
        placeholder="Searh your wish"
        ref={searchText}
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            console.log("buscar intro: " + searchText.current.value);
            onSearchWish(searchText.current.value);


          }
         
        }}
      />

      <button
        onClick={(event) => {

          console.log("buscar boton: " + searchText.current.value);
          onSearchWish(searchText.current.value);



        }}
      >
        Buscar
      </button>



      <ul className="list-group">

        {whishes.map(({ id, text, done }) => (
          <WishItem
            wish={{ id, text, done }}
            key={`wishItem${id}`}
            onChangeWish={(updatedWish) => {
              console.log(updatedWish);
              onUpdateWish(updatedWish);
            }}
            onDeleteWish={(id) => {
              onRemoveWish(id);

            }}
          />

        ))}

      </ul>
    </fieldset>
  );
}

Wishlist.propTypes = {
  whishes: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.string.isRequired,
      text: Proptypes.string.isRequired,
      done: Proptypes.bool.isRequired,
    }),
  ),
  onUpdateWish: Proptypes.func,

};
Wishlist.defaultProps = {
  whishes: [],
  onUpdateWish: () => ({ id: '', text: '', done: false }),
};

export default Wishlist;
