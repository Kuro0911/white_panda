import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./components/Details/Details";
import Booking from "./components/Booking/Booking";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/details/:car_id" element={<Details />} />
          <Route path="/book/:car_id" element={<Booking />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
