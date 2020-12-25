import React from "react";
import { DataContext } from "../store/getData";

const Header = () => {
  const { setCityValue, getData } = React.useContext(DataContext);
  return (
    <header>
      <div className="logo">LOGO</div>
      <form onSubmit={getData}>
        <input type="text" onChange={(e) => setCityValue(e.target.value)} placeholder="type city here..." />
        <button>
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    </header>
  );
};
export default Header;
