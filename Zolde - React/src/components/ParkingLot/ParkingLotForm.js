import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';

function ParkingLotForm() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [totalSpaces, setTotalSpaces] = useState('');
  const [usedSpaces, setUsedSpaces] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit the data to your server

    // Clear the form
    setName('');
    setAddress('');
    setZipCode('');
    setTotalSpaces('');
    setUsedSpaces('');
  };

  return (
    <Container>
      <Typography variant="h4" style={{ marginBottom: '20px' }}>Add Parking Lot</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Address"
          value={address}
          onChange={e => setAddress(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Zip Code"
          value={zipCode}
          onChange={e => setZipCode(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Total Spaces"
          value={totalSpaces}
          onChange={e => setTotalSpaces(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Used Spaces"
          value={usedSpaces}
          onChange={e => setUsedSpaces(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>Submit</Button>
      </form>
    </Container>
  );
}

export default ParkingLotForm;
