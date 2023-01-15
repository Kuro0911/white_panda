import React, { useEffect, useState } from "react";
import "./Booking.css";
import Button from "@mui/material/Button";
import { Alert, Modal, Snackbar, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import { MOCK_DATA } from "../../utils/data/mock_data";

function Booking() {
  const { car_id } = useParams();
  const [car, setCar] = useState([]);
  useEffect(() => {
    if (car_id) {
      setCar(MOCK_DATA[car_id]);
    }
  }, [car_id]);

  const [data, setData] = useState({
    name: "",
    phone_number: "",
    issue_date: null,
    return_date: null,
  });
  const [error, setError] = useState({
    name: false,
    phone_number: false,
    issue_date: false,
    return_date: false,
  });
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleChange = (type, e) => {
    setError({
      name: false,
      phone_number: false,
      issue_date: false,
      return_date: false,
    });
    switch (type) {
      case "name":
        setData({ ...data, name: e.target.value });
        break;
      case "phone_number":
        setData({ ...data, phone_number: e.target.value });
        break;
      case "issue_date":
        setData({ ...data, issue_date: e });
        break;
      case "return_date":
        setData({ ...data, return_date: e });
        break;
      default:
        break;
    }
    console.log(data);
  };
  const handleSubmit = () => {
    if (data.name.length === 0 || data.phone_number === 0) {
      setData({ ...data, name: data.name });
      setError({ ...error, name: true });
      setOpen(true);
      return;
    }
    if (data.issue_date > data.return_date) {
      setData({ ...data, issue_date: null });
      setError({ ...error, issue_date: true });
      setOpen(true);
      return;
    }
    setOpenModal(true);
    console.log(data);
  };
  return (
    <div className="full-wrap">
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className="dashboard-title">Booking Confirmed !</h1>
          <h1 className="car-details">You Have Booked {car.name}</h1>
          <h1 className="car-details">
            For the duration {Date(data.issue_date)} - {Date(data.return_date)}
          </h1>
        </Box>
      </Modal>
      <div className="book-wrap">
        <h1 className="dashboard-title">Booking Details</h1>
        <hr />
        <div className="booking">
          <div className="left-book">
            <TextField
              id="filled-basic"
              label="Name"
              variant="standard"
              error={error.name}
              sx={{ m: 1, width: "25ch" }}
              value={data.name}
              onChange={(e) => handleChange("name", e)}
            />
            <TextField
              id="filled-basic"
              label="Phone Number"
              variant="standard"
              error={error.phone_number}
              sx={{ m: 1, width: "25ch" }}
              type="number"
              value={data.phone_number}
              onChange={(e) => handleChange("phone_number", e)}
            />
          </div>
          <div className="right-book">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Issue Date"
                sx={{ m: 1, width: "25ch" }}
                value={data.issue_date}
                onChange={(e) => handleChange("issue_date", e)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Return Date"
                value={data.return_date}
                sx={{ m: 1, width: "25ch" }}
                onChange={(e) => handleChange("return_date", e)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <div className="btn">
            <Button variant="contained" fullWidth onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Invalid Input!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Booking;
