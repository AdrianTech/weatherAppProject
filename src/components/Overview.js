import React from "react";
import Details from "./Details";
import Showcase from "./Showcase";
import { DataContext } from "../store/dataContext";
import WelcomePage from "./WelcomePage";

const Overview = () => {
  const { isCity } = React.useContext(DataContext);

  return (
    <main>
      {isCity ? (
        <div className="grid">
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
