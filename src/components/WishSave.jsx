import React from "react";
import PropTypes from "prop-types";

/**
 * Callback to run when a user clicks it.
 * @callback onWishesSave - Callback to run when a wish changes.
 */

/**
 * Render a button action.
 * @param {onWishesSave} callback - Callback to run when a user clicks it.
 */
function WishSave({ onWishesSave, text }) {
  if (text === "") {
    return (
      <input
        disabled={false}
        type="button"
        value="Save"
        onClick={onWishesSave}
      />
    );
  }
  if (text !== "") {
    return <input disabled type="button" value="Save" onClick={onWishesSave} />;
  }
}

WishSave.propTypes = {
  onWishesSave: PropTypes.func,
  text: PropTypes.string.isRequired,
};

WishSave.defaultProps = {
  onWishesSave: () => {},
};

export default WishSave;
