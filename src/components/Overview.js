import React from "react";
import Details from "./Details";
import Showcase from "./Showcase";
import { DataContext } from "../store/getData";
import WelcomePage from "./WelcomePage";

const Overview = () => {
  const { getData, isCity } = React.useContext(DataContext);
  React.useEffect(() => {
    window.addEventListener("load", (e) => getData(e, "onload"));
  }, []);
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
