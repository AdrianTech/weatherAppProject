import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { API } from "../utils/config";
import { saveCity } from "../utils/helpers";
export const DataContext = React.createContext({});

export const DataContextProvider = (props) => {
  const [city, setCity] = React.useState({});
  const [isCity, setIsCity] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [alert, setAlert] = React.useState({ state: false, msg: "" });

  const alertHandler = (msg) => {
    setAlert({ state: true, msg });
    setTimeout(() => {
      setAlert({ state: false, msg: "" });
    }, 2500);
  };
  
  const setPageHandle = (step) => {
    if(step === 'back') return setPage(page => page - 1);
    setPage(page => page + 1);
  }

  const getData = async (cityVal) => {
    if (!cityVal) return;
    try {
      const res = await axios.get(`${API.link}${cityVal}${API.settings}`, {
        headers: {
          Domain: "weatheraproject.netlify.app"
        }
      });
      setCity(res.data);
      saveCity(cityVal);
      setIsCity(true);    
      return true;
    } catch ({response}) {
      if(response.status === 404) {
        return alertHandler("City not found");
      } else if(response.status === 400) {
        return alertHandler("Bad request");
      }
      alertHandler("Ups! Something went wrong");
      setIsCity(false)
      return false;
    }
  };
  return <DataContext.Provider value={{ isCity, getData, setPageHandle, page, city, alert }}>{props.children}</DataContext.Provider>;
};
DataContext.propTypes = {
  children: PropTypes.node.isRequired,
};
