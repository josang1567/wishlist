import React from 'react';
import Proptypes from 'prop-types';
import ClassNames from 'classnames';

function WishItem({ wish }) {
  return (
    <li className="list-group.item wishItem">
      <label
        className={ClassNames({ 'text-decoration-line-through': wish.done })}
        htmlFor={wish.id}
      >
        {wish.text}
      </label>
      <input type="checkbox" id={wish.text} defaultChecked={wish.done} />
    </li>
  );
}

WishItem.propTypes = {
  wish:
    Proptypes.shape({
      id: Proptypes.string.isRequired,
      text: Proptypes.string.isRequired,
      done: Proptypes.bool.isRequired,
    }),

};
WishItem.defaultProps = {
  wish: {id:'', text: '', done: false },
};
export default WishItem;
