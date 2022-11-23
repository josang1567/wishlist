import React, { useRef, useState } from "react";
import Proptypes from "prop-types";
import ClassNames from "classnames";
import { SlWrench } from "react-icons/sl";
import { BsEraser } from "react-icons/bs";
import WishModal from "./WishModal";
import {  Draggable } from "react-beautiful-dnd";

function WishItem({ wish, onChangeWish, onDeleteWish, onEditWish, index }) {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const inputText = useRef();

  return (
    <Draggable key={wish.id} draggableId={wish.id} index={index}>
      {(draggableProvided) =>
        <li {...draggableProvided.draggableProps}
          ref={draggableProvided.innerRef}
          {...draggableProvided.dragHandleProps}
          className="list-group.item wishItem">
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
            className={ClassNames({ "text-decoration-line-through": wish.done })}
            htmlFor={wish.id}
          >
            {wish.text}
          </label>
          <WishModal
            estado={estadoModal1}
            cambiarEstado={cambiarEstadoModal1}
          >
            <input ref={inputText} type="text" defaultValue={wish.text} />
            <button onClick={() => { onEditWish(wish.id, inputText.current.value), cambiarEstadoModal1(false) }
            }>Guardar</button>
          </WishModal>
          <button
            type="button"

            onClick={() => onDeleteWish(wish.id)}
            style={{ marginLeft: "10px" }}
          ><BsEraser /></button>
          <button
            type="button"

            onClick={() => { cambiarEstadoModal1(!estadoModal1) }}
            style={{ marginLeft: "10px" }}
          ><SlWrench /></button>


        </li>}
    </Draggable>

  );


}

WishItem.propTypes = {
  wish: Proptypes.shape({
    id: Proptypes.string.isRequired,
    text: Proptypes.string.isRequired,
    done: Proptypes.bool.isRequired,
  }),
  onChangeWish: Proptypes.func,
  onDeleteWish: Proptypes.func,
  onEditWish: Proptypes.func,
};
WishItem.defaultProps = {
  wish: { id: "", text: "", done: false },
  onChangeWish: () => { },
  onDeleteWish: () => { },
};
export default WishItem;