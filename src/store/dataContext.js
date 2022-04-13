import React, { useCallback } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { API } from "../utils/config";
import { getItem, saveItem } from "../utils/helpers";
export const DataContext = React.createContext({});
const userLang = () => window.navigator.language.substring(0, 2) ?? "pl";

export const DataContextProvider = (props) => {
  const [city, setCity] = React.useState({});
  const [isCity, setIsCity] = React.useState(false);
  const [currentLanguage, setCurrentLanguage] = React.useState(getItem('lang') ?? userLang())
  const [alert, setAlert] = React.useState({ state: false, msg: "" });

  const alertHandler = (msg) => {
    setAlert({ state: true, msg });
    setTimeout(() => {
      setAlert({ state: false, msg: "" });
    }, 2500);
  };

  const changeLanguage = (lang) => {
    saveItem('lang', lang);
    setCurrentLanguage(lang);
    getData(getItem('city'));
  }

  const getData = useCallback(async (cityName) => {
    if (!cityName) return;
    const lang = getItem('lang');
    try {
      const { data } = await axios.get(`${API.link}${cityName}${API.settings}${lang}`, {
        headers: {
          Domain: "weatheraproject.netlify.app"
        }
      });
      setCity(data);
      saveItem('city', cityName);
      setIsCity(true);
      return true;
    } catch ({ response: { status } }) {
      if (status === 404) {
        return alertHandler("Nie znaleziono");
      } else if (status === 400) {
        return alertHandler("Złe zapytanie");
      }
      alertHandler("Ups, coś poszło nie tak");
      return false;
    }
  }, []);

  React.useEffect(() => {
    getData(getItem('city'));
    if (!getItem('lang')) {
      saveItem('lang', userLang());
    }
  }, [getData]);
  return <DataContext.Provider value={{ isCity, currentLanguage, changeLanguage, getData, city, alert, alertHandler }}>{props.children}</DataContext.Provider>;
};
DataContext.propTypes = {
  children: PropTypes.node.isRequired,
};
