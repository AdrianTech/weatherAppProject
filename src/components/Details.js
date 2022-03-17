import React from "react";
import useTranslations from "../hooks/useTranslations/useTranslations";
import { ActionsContext } from "../store/actionsContext";
import { ternaryFunction } from "../utils/helpers";
import DetailsPageOne from "./DetailsPageOne";
import DetailsPageTwo from "./DetailsPageTwo";
const Details = () => {
  const { page, setPageHandle } = React.useContext(ActionsContext);
  const { t } = useTranslations();
  const results = ternaryFunction(
    {defaultValue: 1, passValue: page, firstValue: "Pokaż więcej", secondValue: "Pokaż mniej"},{defaultValue: 1, passValue: page, firstValue: "next", secondValue: "back"},
    {defaultValue: 1, passValue: page, firstValue: <DetailsPageOne/>, secondValue: <DetailsPageTwo/>},
    );
  // const showCurrentDetails = () => page === 1 ? <DetailsPageOne/> : <DetailsPageTwo/>
  return (
    <section className="details">
      <ul>
        {results[2]}
        <button className="btn-page" onClick={() => setPageHandle(results[1])}>{t(results[0])}</button>
      </ul>
    </section>
  );
};
export default Details;
