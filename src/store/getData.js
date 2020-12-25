import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
const API = {
  link: "https://api.openweathermap.org/data/2.5/weather?q=",
  key: "&APPID=65145ede2045440196d67207a0169147&units=metric&lang=pl`",
};
export const DataContext = React.createContext({});

export const DataContextProvider = (props) => {
  const [showDetails, setShowDetails] = React.useState(false);
  const [cityValue, setCityValue] = React.useState("");
  const [city, setCity] = React.useState({});

  const getData = async (e) => {
    e.preventDefault();
    const res = await axios.get(`${API.link}${cityValue}${API.key}`);
    setCity(res.data);
  };

  const showDetailsHandler = () => {
    setShowDetails(!showDetails);
  };
  return <DataContext.Provider value={{ showDetailsHandler, getData, showDetails, setCityValue, city, cityValue }}>{props.children}</DataContext.Provider>;
};
DataContext.propTypes = {
  children: PropTypes.node.isRequired,
};
