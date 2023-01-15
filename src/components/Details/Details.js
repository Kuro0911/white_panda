import { Chip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MOCK_DATA } from "../../utils/data/mock_data";
import Card from "../Card/Card";
import "./Details.css";
import CancelIcon from "@mui/icons-material/Cancel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Details() {
  const { car_id } = useParams();
  const [car, setCar] = useState([]);
  useEffect(() => {
    if (car_id) {
      setCar(MOCK_DATA[car_id]);
    }
  }, [car_id]);

  return (
    <div className="details">
      <Card car={car} large />
      <div className="details-container">
        <h1 className="dashboard-title">Car Details</h1>
        <hr />
        <div className="details-wrap">
          {car.booked ? (
            <Chip
              icon={<CancelIcon />}
              label="Not Available"
              variant="outlined"
            />
          ) : (
            <></>
          )}
          <h1 className="details-text">Vehicle Number: {car.vehicle_number}</h1>
          <h1 className="details-text">{car.type} Car</h1>
          <h1 className="details-text">{car.engine}</h1>
          <h1 className="details-text">{car.about}</h1>
        </div>
        {car.booked ? (
          <>
            <h1 className="dashboard-title">Current Booking</h1>
            <hr />
            <div className="details_container">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="right">Phone Number</TableCell>
                      <TableCell align="right">Issue Date</TableCell>
                      <TableCell align="right">Return Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      key={car.booking_details.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {car.booking_details.name}
                      </TableCell>
                      <TableCell align="right">
                        {car.booking_details.phone_number}
                      </TableCell>
                      <TableCell align="right">
                        {car.booking_details.issue_date}
                      </TableCell>
                      <TableCell align="right">
                        {car.booking_details.return_date}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Details;
