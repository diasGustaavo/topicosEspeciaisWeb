import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ParkingLotRoute from './routes/ParkingLotRoute';
import VehicleRoute from './routes/VehicleRoute';

function App() {
  const navStyle = {
    padding: '10px',
    backgroundColor: '#282c34',
    display: 'flex',
    justifyContent: 'space-evenly',
    listStyleType: 'none',
    color: 'white'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '20px'
  };

  return (
    <Router>
      <nav style={navStyle}>
        <Link to="/parking-lot" style={linkStyle}>Parking Lot</Link>
        <Link to="/vehicle" style={linkStyle}>Vehicle</Link>
      </nav>
      <Routes>
        <Route path="/parking-lot" element={<ParkingLotRoute />} />
        <Route path="/vehicle" element={<VehicleRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
