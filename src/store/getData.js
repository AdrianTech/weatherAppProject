import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { API } from "../utils/config";
import { saveCity } from "../utils/helpers";
export const DataContext = React.createContext({});

export const DataContextProvider = (props) => {
  const [city, setCity] = React.useState({});
  const [isCity, setIsCity] = React.useState(false);

  const getData = async (cityVal, from) => {
    console.log(cityVal, from);
    if (!cityVal && !from) return alert("Enter a city");
    else if (!cityVal && from) return;
    try {
      const res = await axios.get(`${API.link}${cityVal}${API.key}`);
      console.log(res);
      setCity(res.data);
      saveCity(cityVal);
      setIsCity(true);
      return true;
    } catch (e) {
      alert(e.response.data.message);
      return false;
    }
  };
  return <DataContext.Provider value={{ isCity, getData, city }}>{props.children}</DataContext.Provider>;
};
DataContext.propTypes = {
  children: PropTypes.node.isRequired,
};
