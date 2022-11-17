import React, { useRef } from "react";
import Proptypes from "prop-types";
import { v4 as Uuidv4 } from "uuid";

function WishInput({ onNewWish, text }) {
  const inputText = useRef();
  if (text === "") {
    return (
      <fieldset>
        <legend>New Wish</legend>
        <input
          type="text"
          placeholder="Make your wish"
          disabled={false}
          ref={inputText}
          onKeyUp={(event) => {
            if (event.key === "Enter" && inputText.current.value.length > 0) {
              //console.log(`cambio: ${inputText.current.value.length}`);
              onNewWish({
                id: Uuidv4(),
                text: inputText.current.value,
                done: false,
              });
              inputText.current.value = "";
            }
            if (event.key==="Escape" && inputText.current.value.length > 0) {
              inputText.current.value = '';
            }
          }}
        />
        <button
          type="button"
          disabled={false}
          onClick={() => {
            if (inputText.current.value.length > 0) {
              //console.log(`cambio: ${inputText.current.value.length}`);
              onNewWish({
                id: Uuidv4(),
                text: inputText.current.value,
                done: false,
              });
              inputText.current.value = "";
            }
          }}
        >
          Enviar
        </button>
      </fieldset>
    );
  }
  if (text !== "") {
    return (
      <fieldset>
        <legend>New Wish</legend>
        <input
          disabled
          type="text"
          placeholder="Make your wish"
          ref={inputText}
          onKeyUp={(event) => {
            if (event.key === "Enter" && inputText.current.value.length > 0) {
              //console.log(`cambio: ${inputText.current.value.length}`);
              onNewWish({
                id: Uuidv4(),
                text: inputText.current.value,
                done: false,
              });
              inputText.current.value = "";
            }
          }}
        />
        <button
          type="button"
          disabled
          onClick={() => {
            if (inputText.current.value.length > 0) {
              //console.log(`cambio: ${inputText.current.value.length}`);
              onNewWish({
                id: Uuidv4(),
                text: inputText.current.value,
                done: false,
              });
              inputText.current.value = "";
            }
          }}
        >
          Enviar
        </button>
      </fieldset>
    );
  }
}

WishInput.propTypes = {
  onNewWish: Proptypes.func,
  text: Proptypes.string.isRequired,
};
WishInput.defaultProps = {
  onNewWish: () => {},
};

export default WishInput;
