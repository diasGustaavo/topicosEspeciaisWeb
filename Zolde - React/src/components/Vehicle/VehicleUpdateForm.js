import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

function VehicleUpdateForm({ vehicleId, onUpdate, onDelete }) {
  const [additionalServices, setAdditionalServices] = useState('');
  const [category, setCategory] = useState('');
  const [controlNumber, setControlNumber] = useState('');
  const [licensePlate, setLicensePlate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Update the vehicle using the provided onUpdate function
    onUpdate(vehicleId, {
      additionalServices,
      category,
      controlNumber,
      licensePlate
    });

    // Clear the form
    setAdditionalServices('');
    setCategory('');
    setControlNumber('');
    setLicensePlate('');
  };

  const handleDelete = () => {
    onDelete(vehicleId);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Additional Services"
        value={additionalServices}
        onChange={e => setAdditionalServices(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Category"
        value={category}
        onChange={e => setCategory(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Control Number"
        value={controlNumber}
        onChange={e => setControlNumber(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="License Plate"
        value={licensePlate}
        onChange={e => setLicensePlate(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Box mt={2}>
        <Button type="submit" variant="contained" color="primary" style={{ marginRight: '10px' }}>Update</Button>
        <Button variant="contained" color="secondary" onClick={handleDelete}>Delete</Button>
      </Box>
    </form>
  );
}

export default VehicleUpdateForm;
