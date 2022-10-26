import React from 'react';
import Proptypes from 'prop-types';
import WishItem from './WishItem';
import { v4 as Uuidv4 } from 'uuid';

function Wishlist({ whishes, onUpdateWish }) {
  return (
    <ul className="list-group">
      {whishes.map(({ id, text, done }) => (
        <WishItem wish={{ id, text, done }} key={`wishItem${id}`}
        onChangeWish={(updatedWish)=>{
          console.log(updatedWish);
          onUpdateWish(updatedWish);
        }} />
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
  onUpdateWish: Proptypes.func,

};
Wishlist.defaultProps = {
  whishes: [],
  onUpdateWish: ()=> ({id:'',text:'',done:false }),
};

export default Wishlist;
