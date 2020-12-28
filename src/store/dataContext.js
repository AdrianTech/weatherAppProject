import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { API } from "../utils/config";
import { saveCity } from "../utils/helpers";
export const DataContext = React.createContext({});

export const DataContextProvider = (props) => {
  const [city, setCity] = React.useState({});
  const [isCity, setIsCity] = React.useState(false);
  const [alert, setAlert] = React.useState({ state: false, msg: "" });

  const alertHandler = (msg) => {
    setAlert({ state: true, msg });
    setTimeout(() => {
      setAlert({ state: false, msg: "" });
    }, 2500);
  };

  const getData = async (cityVal) => {
    if (!cityVal) return;
    try {
      const res = await axios.get(`${API.link}${cityVal}${API.key}`);
      setCity(res.data);
      saveCity(cityVal);
      setIsCity(true);
      return true;
    } catch (e) {
      alertHandler(e.response.data.message);
      return false;
    }
  };
  return <DataContext.Provider value={{ isCity, getData, city, alert }}>{props.children}</DataContext.Provider>;
};
DataContext.propTypes = {
  children: PropTypes.node.isRequired,
};
