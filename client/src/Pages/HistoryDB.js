import React from "react";
import Sidepanel from "../Components/Sidepanel";
import Signout from "../Components/AdminSignOutbtn";

const HistoryDB = () => {
  return (
    <div className="history">
      <Sidepanel />
      <div className="mainContent">
        <h1>History Dashboard</h1>
      </div>
      <Signout />
    </div>
  );
};

export default HistoryDB;
