import React from "react";
import { MOCK_DATA } from "../../utils/data/mock_data";
import Card from "../Card/Card";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Cars for rent</h1>
      <hr />
      <div className="dashboard-wrap">
        <h2 className="dashboard-subtitle">Car details</h2>
        <h2 className="dashboard-subtitle">Rent Per day</h2>
      </div>
      <div className="card-wrap">
        {MOCK_DATA.map((ele, key) => (
          <Card car={ele} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
