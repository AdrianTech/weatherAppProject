import PropTypes from "prop-types";
import React from "react";
import useTranslations from "../hooks/useTranslations/useTranslations";

const Alert = ({ msg }) => {
  const { t } = useTranslations();
  return (
    <div className="alert">
      <p>{t(msg)}</p>
    </div>
  );
};

Alert.propTypes = {
  msg: PropTypes.string.isRequired,
};
export default Alert;
