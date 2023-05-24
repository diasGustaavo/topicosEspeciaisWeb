import React from 'react';
import { Typography, List, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import LocalParkingIcon from '@mui/icons-material/LocalParking';

function ParkingLotList({ parkingLots, onSelect }) {
  const handleSelect = (id) => {
    onSelect(id);
  };

  return (
    <>
      <Typography variant="h4" style={{ marginBottom: '20px' }}>Parking Lot List</Typography>
      <List component="nav">
        {parkingLots.map((parkingLot) => (
          <ListItemButton key={parkingLot.id} onClick={() => handleSelect(parkingLot.id)}>
            <ListItemIcon>
              <LocalParkingIcon />
            </ListItemIcon>
            <ListItemText primary={parkingLot.name} secondary={`ID: ${parkingLot.id}`} />
          </ListItemButton>
        ))}
      </List>
    </>
  );
}

export default ParkingLotList;
