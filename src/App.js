import React from "react";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Alert from "./components/Alert";
import { DataContext } from "./store/dataContext";
import Forecast from "./components/forecast/Forecast.js";
import useTranslations from "./hooks/useTranslations/useTranslations";
import { ternaryFunction } from "./utils/helpers";
import LanguageSelection from "./components/LanguageSelection";
import { ActionsContextProvider } from "./store/actionsContext";

function App() {
  const { alert, isCity, alertHandler } = React.useContext(DataContext);
  const { t } = useTranslations();
  const [switchPage, setSwitchPage] = React.useState(false);

  const switchPageHandle = () => {
    if (!isCity) return alertHandler('Nie ustawiono miasta');
    setSwitchPage(state => !state)
  }
  const results = ternaryFunction(
    { defaultValue: true, passValue: switchPage, firstValue: <Forecast />, secondValue: <Overview /> },
    { defaultValue: false, passValue: switchPage, firstValue: t('5-dniowa prognoza'), secondValue: t('Aktualna pogoda') },
  );
  return (
    <div className="wrapper">
      <Header />
      <LanguageSelection setSwitchPage={switchPageHandle} result={results[1]} />
      {alert.state && <Alert msg={alert.msg} />}
      <ActionsContextProvider>
        {results[0]}
      </ActionsContextProvider>
    </div>
  );
}
export default App;
