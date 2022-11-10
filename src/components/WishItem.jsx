import React from "react";
import Proptypes from "prop-types";
import ClassNames from "classnames";

function WishItem({ wish, onChangeWish, onDeleteWish }) {
  return (
    <li className="list-group.item wishItem">
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

      <input
        type="button"
        value="x"
        onClick={() => onDeleteWish(wish.id)}
        style={{ marginLeft: "10px", color: "red", cursor: "pointer" }}
      />
    </li>
  );
}

WishItem.propTypes = {
  wish: Proptypes.shape({
    id: Proptypes.string.isRequired,
    text: Proptypes.string.isRequired,
    done: Proptypes.bool.isRequired,
  }),
  onChangeWish: Proptypes.func,
};
WishItem.defaultProps = {
  wish: { id: "", text: "", done: false },
  onChangeWish: () => {},
};
export default WishItem;
