import React from "react";
import Details from "./Details";
import Showcase from "./Showcase";
import { DataContext } from "../store/dataContext";
import { getItem, saveItem } from "../utils/helpers";
import WelcomePage from "./WelcomePage";
import { assets } from "../utils/config";
import { ActionsContextProvider } from "../store/actionsContext";

const Overview = () => {
  const { isCity, getData, changeLanguage, currentLanguage } = React.useContext(DataContext);
  React.useEffect(() => {
    getData(getItem('city'));
    if (getItem('lang') == null) {
      saveItem('lang', 'pl');
    }
  }, [getData]);
  return (
    <main>
      {isCity ? (
        <div className="grid">
          <div className="btn-select">
            <button disabled={currentLanguage === "pl"} onClick={() => changeLanguage("pl")} ><img src={assets.plFlag} alt="Polish language" /></button>
            <button disabled={currentLanguage === "en"} onClick={() => changeLanguage("en")}><img src={assets.ukFlag} alt="English language" /></button>
          </div>
          <Showcase />
          <ActionsContextProvider>
            <Details />
          </ActionsContextProvider>
        </div>
      ) : (
        <WelcomePage />
      )}
    </main>
  );
};
export default Overview;
