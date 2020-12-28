import React from "react";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Alert from "./components/Alert";
import { DataContext } from "./store/dataContext";

function App() {
  const { alert } = React.useContext(DataContext);
  return (
    <div className="wrapper">
      <Header />
      {alert.state && <Alert msg={alert.msg} />}
      <Overview />
    </div>
  );
}
export default App;
