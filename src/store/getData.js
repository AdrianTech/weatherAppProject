import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { API } from "../utils/config";
import { saveCity, getCity } from "../utils/helpers";
export const DataContext = React.createContext({});

export const DataContextProvider = (props) => {
  const [cityValue, setCityValue] = React.useState("");
  const [city, setCity] = React.useState({});
  const [isCity, setIsCity] = React.useState(false);

  const getData = async (e, onLoad) => {
    e.preventDefault();
    const storageCity = getCity();
    if (cityValue === "" && storageCity === null) return;
    try {
      const res = await axios.get(`${API.link}${onLoad ? storageCity : cityValue}${API.key}`);
      setCity(res.data);
      saveCity(cityValue);
      setIsCity(true);
      setCityValue("");
    } catch (e) {
      if (e.response.data.cod === "404") alert(`Not found ${onLoad ? storageCity : cityValue}`);
      else alert("Something went wrong. Try again");
    }
  };
  return <DataContext.Provider value={{ isCity, getData, setCityValue, city, cityValue }}>{props.children}</DataContext.Provider>;
};
DataContext.propTypes = {
  children: PropTypes.node.isRequired,
};
