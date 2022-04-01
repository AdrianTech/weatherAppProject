import React from "react";
import Details from "./Details";
import Showcase from "./Showcase";
import { DataContext } from "../store/dataContext";
import WelcomePage from "./WelcomePage";
import { ActionsContextProvider } from "../store/actionsContext";

const Overview = () => {
  const { isCity } = React.useContext(DataContext);
  
  return (
    <main>
      {isCity ? (
        <div className="grid">
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
