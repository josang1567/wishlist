import React from 'react';
import Proptypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import WishItem from './WishItem';
import WishSearch from './WishSearch';
/**
 * Callback to run when a wish changes.
 * @callback onUpdate wish - Callback to run when a wish changes.
 * @param {Object} updatedWish - Wish with new values
 * @param {String} updatedWish.id - identifier for wish
 * @param {String} updatedWish.text - text of wish
 *
 */

/**
 * Callback to run when a wish is deleted.
 * @callback onRemovewish wish - Callback to run when a wish changes.
 * @param {String} wish.id - identifier for wish
 *
 */

/**
 * Callback to run when a wish changes is text.
 * @callback onModifiedWish wish - Callback to run when a wish changes.
 *  @param {idEdit} callback -identifier for wish.
 * @param {textEdit} callback - new text.
 *
 */
/**
 * Callback to run when a wish changes is text.
 * @callback onSearchWish wish - Callback to run when a wish changes.
 *  @param {searchText} callback -text used to search for a wish.
 *
 */
/**
 * Manage a wish list
 * @todo check array map function.
 * @param {Object[]} wishes - List of wishes
 * @param {String} wishes.id - identifier for wish
 * @param {String} wishes.text - text of wish
 * @param {onUpdateWish} callback - Callback to run when a wish changes.
 * @param {idBorrado} callback - Callback to run when a wish is deleted.
 * @param {idEdit} callback - Callback to run when a wish changes its text.
 * @param {textEdit} callback - Callback to run when a wish changes its text.
 * @param {index} callback - Callback to run when a wish changes order.
 *
 *
 * @returns HTML with a wish list
 */
function Wishlist({
  whishes,
  onUpdateWish,
  onRemoveWish,
  onSearchWish,
  onModifiedWish,
}) {
  return (
    <fieldset>
      <WishSearch
        onSearchWish={(searchText) => {
          onSearchWish(searchText);
        }}
      />
      <Droppable droppableId="tasks">
        {(droppableProvided) => (
          <ul
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
            className="list-group"
          >
            {whishes.map(({ id, text, done }, index) => (
              <WishItem
                wish={{ id, text, done }}
                key={`wishItem${id}`}
                onChangeWish={(updatedWish) => {
                  // console.log(updatedWish);
                  onUpdateWish(updatedWish);
                }}
                onDeleteWish={(idBorrado) => {
                  onRemoveWish(idBorrado);
                }}
                onEditWish={(idEdit, textEdit) => {
                  onModifiedWish(idEdit, textEdit);
                }}
                index={index}
              />
            ))}
            {droppableProvided.placeholder}
          </ul>
        )}
      </Droppable>
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
  onRemoveWish: Proptypes.func,
  onSearchWish: Proptypes.func,
  onModifiedWish: Proptypes.func,
};
Wishlist.defaultProps = {
  whishes: [],
  onUpdateWish: () => ({ id: '', text: '', done: false }),
  onRemoveWish: () => {},
  onSearchWish: () => {},
  onModifiedWish: () => {},
};

export default Wishlist;
