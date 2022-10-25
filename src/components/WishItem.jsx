import React from 'react';
import Proptypes from 'prop-types';
import ClassNames from 'classnames';

function WishItem({ wish }) {
  return (
    <li className="list-group.item wishItem">
      <label className={ClassNames({'text-decoration-line-through':wish.done})}
        htmlFor={wish.text}>{wish.text}</label>
      <input type="checkbox" id={wish.text} defaultChecked={wish.done} />
    </li>
  );
}

WishItem.propTypes = {
  wish:
    Proptypes.shape({
      text: Proptypes.string.isRequired,
      done: Proptypes.bool.isRequired,
    }),

};
WishItem.defaultProps = {
  wish: { text: '', done: false },
};
export default WishItem;
