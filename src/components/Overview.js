import React from "react";
import Details from "./Details";
import Showcase from "./Showcase";
import { DataContext } from "../store/dataContext";
import { getItem, saveItem } from "../utils/helpers";
import WelcomePage from "./WelcomePage";

const Overview = () => {
  const { isCity, getData, changeLanguage} = React.useContext(DataContext);
  const currentLanguage = getItem('lang');
  React.useEffect(() => {
    getData(getItem('city'));
    if(getItem('lang') == null) {
      saveItem('lang', 'pl');
      }
  }, []);
  return (
    <main>
      {isCity ? (
        <div className="grid">
          <div className="btn-select">
          <button disabled={currentLanguage === "pl"} onClick={() => changeLanguage("pl")} ><img src="http://purecatamphetamine.github.io/country-flag-icons/3x2/PL.svg" alt="Polish language"/></button>
          <button disabled={currentLanguage === "en"} onClick={() => changeLanguage("en")}><img src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg" alt="English language"/></button>
          </div>
          <Showcase />
          <Details />
        </div>
      ) : (
        <WelcomePage />
      )}
    </main>
  );
};
export default Overview;
