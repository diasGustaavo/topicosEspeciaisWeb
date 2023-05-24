import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';

function VehicleForm() {
  const [additionalServices, setAdditionalServices] = useState('');
  const [category, setCategory] = useState('');
  const [controlNumber, setControlNumber] = useState('');
  const [licensePlate, setLicensePlate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit the data to your server

    // Clear the form
    setAdditionalServices('');
    setCategory('');
    setControlNumber('');
    setLicensePlate('');
  };

  return (
    <Container>
      <Typography variant="h4" style={{ marginBottom: '20px' }}>Add Vehicle</Typography>
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
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>Submit</Button>
      </form>
    </Container>
  );
}

export default VehicleForm;
