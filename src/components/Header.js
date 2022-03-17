import React from "react";
import { DataContext } from "../store/dataContext";
import logo from "../assets/weather.png";
import { ternaryFunction } from "../utils/helpers";

const Header = () => {
  const { getData, currentLanguage: lang } = React.useContext(DataContext);
  const [cityValue, setCityValue] = React.useState("");
  const setPlaceholder = ternaryFunction({defaultValue: 'pl', passValue: lang, firstValue: 'Wpisz miasto...', secondValue: 'Enter city...'})

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
        <input type="text" onChange={(e) => setCityValue(e.target.value)} value={cityValue} placeholder={setPlaceholder} />
        <button disabled={cityValue.length < 2}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    </header>
  );
};
export default Header;
