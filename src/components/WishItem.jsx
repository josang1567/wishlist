import React, { useRef, useState } from "react";
import Proptypes from "prop-types";
import ClassNames from "classnames";
import { SlWrench } from "react-icons/sl";
import { BsEraser } from "react-icons/bs";
import { Draggable } from "react-beautiful-dnd";
import WishModal from "./WishModal";


/**
 * Callback to run when a wish changes.
 * @callback onChangeWish wish - Callback to run when a wish changes.
 * @param {Object} Wish - Wish with new values
 * @param {String} Wish.id - identifier for wish
 * @param {String} Wish.text - text of wish
 *
 */

/**
 * Callback to run when a wish is deleted.
 * @callback onDeleteWish wish - Callback to run when a wish changes.
 * @param {String} wish.id - identifier for wish
 *
 */

/**
 * Callback to run when a wish changes is text.
 * @callback cambiarEstadoModal1 wish - Callback to run when a wish changes.
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
 *
 * Manage a item 
 * @param {string}wish.id - identifier for a wish
 * @param {string}wish.text - text of a wish
 * @param {string}wish.done - state of a wish
 * @param {onChangeWish}callback - Callback to run when a wish changes.
 * @param {onDeleteWish}callback - Callback to run when a wish is deleted.
 * @param {onEditWish}callback - Callback to run when a wish is edited.
 * @param {index}number - indentifier of order of the wish.
 *
 * @returns
 */
function WishItem({ wish, onChangeWish, onDeleteWish, onEditWish, index }) {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const inputText = useRef();

  return (
    <Draggable key={wish.id} draggableId={wish.id} index={index}>
      {(draggableProvided) => (
        <li
          {...draggableProvided.draggableProps}
          ref={draggableProvided.innerRef}
          {...draggableProvided.dragHandleProps}
          className="list-group.item wishItem"
        >
          <input
            type="checkbox"
            id={wish.id}
            defaultChecked={wish.done}
            onChange={(event) => {
              onChangeWish({
                id: wish.id,
                text: wish.text,
                done: event.target.checked,
              });
            }}
          />
          <label
            className={ClassNames({
              "text-decoration-line-through": wish.done,
            })}
            htmlFor={wish.id}
          >
            {wish.text}
          </label>
          <WishModal estado={estadoModal1} cambiarEstado={cambiarEstadoModal1}>
            <input ref={inputText} type="text" defaultValue={wish.text} />
            <button
              type="button"
              onClick={() => {
                onEditWish(wish.id, inputText.current.value);
                cambiarEstadoModal1(false);
              }}
            >
              Guardar
            </button>
          </WishModal>
          <button
            type="button"
            onClick={() => onDeleteWish(wish.id)}
            style={{ marginLeft: "10px" }}
          >
            <BsEraser />
          </button>
          <button
            type="button"
            onClick={() => {
              cambiarEstadoModal1(!estadoModal1);
            }}
            style={{ marginLeft: "10px" }}
          >
            <SlWrench />
          </button>
        </li>
      )}
    </Draggable>
  );
}

WishItem.propTypes = {
  wish: Proptypes.shape({
    id: Proptypes.string.isRequired,
    text: Proptypes.string.isRequired,
    done: Proptypes.bool.isRequired,
  }),
  index: Proptypes.number.isRequired,
  onChangeWish: Proptypes.func,
  onDeleteWish: Proptypes.func,
  onEditWish: Proptypes.func,
};
WishItem.defaultProps = {
  wish: { id: "", text: "", done: false },
  onChangeWish: () => {},
  onDeleteWish: () => {},
  onEditWish: () => {},
};
export default WishItem;
