import React from "react";
import { DataContext } from "../store/dataContext";
import logo from "../assets/weather.png";
import useTranslations from "../hooks/useTranslations/useTranslations";

const Header = () => {
  const { getData } = React.useContext(DataContext);
  const [cityValue, setCityValue] = React.useState("");
  const { t } = useTranslations();

  const submitData = async () => {
    const result = await getData(cityValue);
    if (result) setCityValue("");
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitData();
        }}
      >
        <input type="text" onChange={(e) => setCityValue(e.target.value)} value={cityValue} placeholder={t("Wpisz miasto...")} />
        <button disabled={cityValue.length < 2}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    </header>
  );
};
export default Header;
