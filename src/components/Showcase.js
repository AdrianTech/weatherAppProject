import React from "react";
import { DataContext } from "../store/getData";

const Showcase = () => {
  const { showDetailsHandler } = React.useContext(DataContext);
  return (
    <div className="showcase">
      Here will be image
      <button onClick={showDetailsHandler}>Show details</button>
    </div>
  );
};
export default Showcase;
