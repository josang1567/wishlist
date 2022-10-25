import React from 'react';
import Proptypes from 'prop-types';
import WishItem from './WishItem';
import { v4 as Uuidv4 } from 'uuid';

function Wishlist({ whishes }) {
  return (
    <ul className="list-group">
      {whishes.map(({ id, text, done }) => (
        <WishItem wish={{ id, text, done }} key={`wishItem${Uuidv4()}`} />
      ))}

    </ul>
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
};
Wishlist.defaultProps = {
  whishes: [],
};

export default Wishlist;
