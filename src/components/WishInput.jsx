import React from 'react';

function WishInput({ onNewWish }) {
  let newWishText = '';
  return (
    <fieldset>
      <legend>New Wish</legend>
      <input type="text" placeholder="Make your wish" onChange={(event) => {
        //
        newWishText = event.target.value;

      }} onKeyUp={(event) => {
        if (event.key == 'Enter' && newWishText.length > 0) {
          console.log("cambio: " + newWishText);
          onNewWish({ text: newWishText, done: false });
          newWishText = '';
        }
      }
      } />

    </fieldset>

  );
}

export default WishInput;
