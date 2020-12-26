import React from "react";
import { DataContext } from "../store/getData";
import logo from "../assets/weather.png";

const Header = () => {
  const { setCityValue, getData } = React.useContext(DataContext);
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <form onSubmit={getData}>
        <input type="text" onChange={(e) => setCityValue(e.target.value)} placeholder="type city here..." />
        <button>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    </header>
  );
};
export default Header;
