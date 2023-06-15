import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login";
import Checkin from "./pages/Checkin";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/checkin" element={<Checkin />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
