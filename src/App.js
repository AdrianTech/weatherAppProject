import React from "react";
import Header from "./components/Header";
import Overview from "./components/Overview";
import { DataContextProvider, DataContext } from "./store/getData";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <DataContextProvider>
      <div className="wrapper">
        <Header />
        <Overview />
      </div>
    </DataContextProvider>
  );
}

export default App;
