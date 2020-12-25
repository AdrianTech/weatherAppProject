import React from "react";
import Details from "./Details";
import Showcase from "./Showcase";
import { DataContext } from "../store/getData";

const Overview = () => {
  const { showDetails } = React.useContext(DataContext);
  return (
    <main>
      <Showcase />
      {showDetails && <Details />}
    </main>
  );
};
export default Overview;
