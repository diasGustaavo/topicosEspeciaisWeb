import React, { useState } from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';

function ParkingLotUpdateForm({ parkingLotId, onUpdate, onDelete }) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [totalSpaces, setTotalSpaces] = useState('');
    const [usedSpaces, setUsedSpaces] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Update the parking lot using the provided onUpdate function
        onUpdate(parkingLotId, {
            name,
            address,
            zipCode,
            totalSpaces,
            usedSpaces
        });

        // Clear the form
        setName('');
        setAddress('');
        setZipCode('');
        setTotalSpaces('');
        setUsedSpaces('');
    };

    const handleDelete = () => {
        onDelete(parkingLotId);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h4" style={{ marginBottom: '20px' }}>Update Parking Lot</Typography>
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
            <Box mt={2}>
                <Button type="submit" variant="contained" color="primary" style={{ marginRight: '10px' }}>Update</Button>
                <Button variant="contained" color="secondary" onClick={handleDelete}>Delete</Button>
            </Box>
        </form>
    );
}

export default ParkingLotUpdateForm;
