import React from "react";
import { ActionsContext } from "../store/actionsContext";
import DetailsPageOne from "./DetailsPageOne";
import DetailsPageTwo from "./DetailsPageTwo";
const Details = () => {
  const { page } = React.useContext(ActionsContext);
  const showCurrentDetails = () => page === 1 ? <DetailsPageOne/> : <DetailsPageTwo/>
  return (
    <section className="details">
      <ul>
        {showCurrentDetails()}
      </ul>
    </section>
  );
};
export default Details;
