import React from "react";
import "./Card.css";
import ColorizeIcon from "@mui/icons-material/Colorize";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import Button from "@mui/material/Button";

function Card({ car }) {
  return (
    <div className="card">
      <div className="left">
        <img className="car-img" src={car.image} alt="" />
      </div>
      <div className="center">
        <div>
          <h1 className="car-name">{car.name}</h1>
          <div className="wrap">
            <div className="text-wrap">
              <ColorizeIcon />
              <h1 className="car-details">{car.color}</h1>
            </div>
            <div className="text-wrap">
              <AirlineSeatReclineNormalIcon />
              <h1 className="car-details">{car.seats}</h1>
            </div>
          </div>
        </div>
        <h1 className="car-name">₹{car.rent}</h1>
      </div>
      <div className="right">
        <Button
          variant="contained"
          style={{ marginRight: "1em" }}
          disabled={car.booked}
        >
          Book Now
        </Button>
        <Button variant="outlined">Details</Button>
      </div>
    </div>
  );
}

export default Card;
