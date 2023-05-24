import React from 'react';
import { Container, Typography, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import DriveEtaIcon from '@mui/icons-material/DriveEta';

function VehicleList({ vehicles, onSelect }) {
  return (
    <Container>
      <Typography variant="h4" style={{ marginBottom: '20px' }}>Vehicles List</Typography>
      <List>
        {vehicles.map((vehicle, index) => (
          <ListItem key={index} disablePadding>
            <Button onClick={() => onSelect(vehicle.id)} style={{ width: '100%', justifyContent: 'flex-start' }}>
              <ListItemIcon>
                <DriveEtaIcon />
              </ListItemIcon>
              <ListItemText
                primary={vehicle.licensePlate}
                secondary={`Additional Services: ${vehicle.additionalServices}, Category: ${vehicle.category}, Control Number: ${vehicle.controlNumber}`}
              />
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default VehicleList;
