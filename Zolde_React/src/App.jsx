import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login";
import Checkin from "./pages/Checkin";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import ParkingLots from "./pages/ParkingLots";
import EditParkingLot from "./pages/EditParkingLot";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/parkinglot/1" element={<ParkingLots />} />
      <Route path="/edit-parking-lot/1" element={<EditParkingLot />} />
      <Route path="/home" element={<Dashboard />} />
      <Route path="/checkin" element={<Checkin />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  )
}

export default App
