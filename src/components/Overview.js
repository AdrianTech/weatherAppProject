import React from "react";
import Details from "./Details";
import Showcase from "./Showcase";
import { DataContext } from "../store/dataContext";
import { getCity } from "../utils/helpers";
import WelcomePage from "./WelcomePage";

const Overview = () => {
  const { isCity, getData } = React.useContext(DataContext);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {
    getData(getCity());
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
