import React from 'react';
import { v4 as Uuidv4 } from 'uuid';
import Proptypes from 'prop-types';
import WishItem from './WishItem';

function Wishlist({ whishes }) {
  return (
    <ul className="list-group">
      {whishes.map(({ text, done }) => (

        <WishItem wish={{ text, done }} key={`wishItem${Uuidv4()}`} />
      ))}

    </ul>
  );
}

Wishlist.propTypes = {
  whishes: Proptypes.arrayOf(
    Proptypes.shape({
      text: Proptypes.string.isRequired,
      done: Proptypes.bool.isRequired,
    }),
  ),
};
Wishlist.defaultProps = {
  whishes: [],
};

export default Wishlist;
