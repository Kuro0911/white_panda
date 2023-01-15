import React from "react";
import "./Card.css";
import ColorizeIcon from "@mui/icons-material/Colorize";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import Button from "@mui/material/Button";

function Card({ car, large }) {
  return (
    <div className={`card ${large ? "large" : ""}`}>
      <div className="left">
        <img
          className={`car-img ${large ? "large-img" : ""}`}
          src={car.image}
          alt=""
        />
      </div>
      <div className={`center ${large ? "large-center" : ""}`}>
        <div>
          <h1 className={`car-name ${large ? "large-name" : ""}`}>
            {car.name}
          </h1>
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
        <h1 className={`car-name ${large ? "large-name" : ""}`}>₹{car.rent}</h1>
      </div>
      <div className="right">
        <Button
          variant="contained"
          style={{ marginRight: "1em" }}
          disabled={car.booked}
        >
          Book Now
        </Button>
        <a href={`/details/${car.id}`} className={`${large ? "hidden" : ""}`}>
          <Button variant="outlined">Details</Button>
        </a>
      </div>
    </div>
  );
}

export default Card;
