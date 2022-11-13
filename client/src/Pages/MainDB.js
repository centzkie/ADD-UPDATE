import React from "react";
import Sidepanel from "../Components/Sidepanel";
import Signout from "../Components/AdminSignOutbtn";

const MainDB = () => {
  return (
    <div className="main">
      <Sidepanel />

      <div className="mainContent">
        <div className="title">
          <h1>Main Dashboard</h1>
        </div>
      </div>
      <div>
        <Signout />
      </div>
    </div>
  );
};

export default MainDB;
