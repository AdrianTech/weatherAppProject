import React from "react";
import Details from "./Details";
import Showcase from "./Showcase";
import { DataContext } from "../store/getData";
import WelcomePage from "./WelcomePage";

const Overview = () => {
  const { isCity, getData } = React.useContext(DataContext);
  React.useEffect(() => {
    getData(localStorage.getItem("city"), "onLoad");
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
