import React, { useState } from 'react';
import { Typography, Grid, Box } from '@mui/material';
import ParkingLotList from '../components/ParkingLot/ParkingLotList';
import ParkingLotForm from '../components/ParkingLot/ParkingLotForm';
import ParkingLotUpdateForm from '../components/ParkingLot/ParkingLotUpdateForm';

function ParkingLotRoute() {
  const [parkingLots, setParkingLots] = useState([
    { id: 1, name: 'Estacionamento CI UFPB', address: 'R. dos Escoteiros, s/n - Mangabeira, João Pessoa - PB', zipCode: '58058-600', totalSpaces: 500, usedSpaces: 200 },
    { id: 2, name: 'Estacionamento Shopping Mangabeira', address: 'Av. Hilton Souto Maior, S/N - Mangabeira, João Pessoa', zipCode: '58055-018', totalSpaces: 1500, usedSpaces: 500 },
    { id: 3, name: 'Estacionamento Praia de Tambaú', address: 'Av. Almirante Tamandaré, s/n - Tambaú, João Pessoa - PB', zipCode: '58039-010', totalSpaces: 300, usedSpaces: 100 },
    { id: 4, name: 'Estacionamento Parque Solón de Lucena', address: 'Praça Dom Adauto - Centro, João Pessoa - PB', zipCode: '58010-670', totalSpaces: 200, usedSpaces: 50 },
    // ...other parking lots
  ]);

  const [selectedParkingLotId, setSelectedParkingLotId] = useState('');

  const handleAddParkingLot = (newParkingLot) => {
    const newId = Math.max(...parkingLots.map(parkingLot => parkingLot.id)) + 1;
    const updatedParkingLots = [...parkingLots, { id: newId, ...newParkingLot }];
    setParkingLots(updatedParkingLots);
  };

  const handleUpdateParkingLot = (id, updatedParkingLot) => {
    const updatedParkingLots = parkingLots.map(parkingLot => {
      if (parkingLot.id === id) {
        return { ...parkingLot, ...updatedParkingLot };
      }
      return parkingLot;
    });
    setParkingLots(updatedParkingLots);
  };

  const handleDeleteParkingLot = (id) => {
    const updatedParkingLots = parkingLots.filter(parkingLot => parkingLot.id !== id);
    setParkingLots(updatedParkingLots);
  };

  const handleSelectParkingLot = (id) => {
    setSelectedParkingLotId(id);
  };

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>
        Parking Lot
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box>
            <ParkingLotForm onAdd={handleAddParkingLot} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <ParkingLotList parkingLots={parkingLots} onSelect={handleSelectParkingLot} />
          </Box>
        </Grid>
      </Grid>
      {selectedParkingLotId && (
        <Box mt={4} pl={4}>
          <Typography variant="h5" gutterBottom>
            Parking Lot ID: {selectedParkingLotId}
          </Typography>
          <ParkingLotUpdateForm
            parkingLotId={selectedParkingLotId}
            onUpdate={handleUpdateParkingLot}
          />
        </Box>
      )}
      {!selectedParkingLotId && <Typography>Select a parking lot to update or delete.</Typography>}
    </Box>
  );
}

export default ParkingLotRoute;
