import React from "react";
import Header from "./components/Header";
import Overview from "./components/Overview";
import { DataContextProvider } from "./store/getData";

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
