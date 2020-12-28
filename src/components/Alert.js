import PropTypes from "prop-types";
import React from "react";

const Alert = ({ msg }) => {
  return (
    <div className="alert">
      <p>{msg}</p>
    </div>
  );
};

Alert.propTypes = {
  msg: PropTypes.string.isRequired,
};
export default Alert;
