import React, { useState } from 'react';
import { Typography, Grid, Box } from '@mui/material';
import VehicleList from '../components/Vehicle/VehicleList';
import VehicleForm from '../components/Vehicle/VehicleForm';
import VehicleUpdateForm from '../components/Vehicle/VehicleUpdateForm';

function VehicleRoute() {
  const [vehicles, setVehicles] = useState([
    { id: 1, additionalServices: 'Lavagem de carro', category: 'Limpeza', controlNumber: '123', licensePlate: 'ABC 123' },
    { id: 2, additionalServices: 'Proteção do FBI', category: 'Segurança', controlNumber: '456', licensePlate: 'DEF 456' },
    { id: 3, additionalServices: 'Reparo de motor', category: 'Manutenção', controlNumber: '789', licensePlate: 'GHI 789' },
    { id: 4, additionalServices: 'Serviço de valet', category: 'Estacionamento', controlNumber: '012', licensePlate: 'JKL 012' },
    // ...other vehicles
  ]);

  const [selectedVehicleId, setSelectedVehicleId] = useState('');

  const handleAddVehicle = (newVehicle) => {
    const newId = Math.max(...vehicles.map(vehicle => vehicle.id)) + 1;
    const updatedVehicles = [...vehicles, { id: newId, ...newVehicle }];
    setVehicles(updatedVehicles);
  };

  const handleUpdateVehicle = (id, updatedVehicle) => {
    const updatedVehicles = vehicles.map(vehicle => {
      if (vehicle.id === id) {
        return { ...vehicle, ...updatedVehicle };
      }
      return vehicle;
    });
    setVehicles(updatedVehicles);
  };

  const handleDeleteVehicle = (id) => {
    const updatedVehicles = vehicles.filter(vehicle => vehicle.id !== id);
    setVehicles(updatedVehicles);
  };

  const handleSelectVehicle = (id) => {
    setSelectedVehicleId(id);
  };

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>
        Vehicle
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box>
            <VehicleForm onAdd={handleAddVehicle} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <VehicleList vehicles={vehicles} onSelect={handleSelectVehicle} />
          </Box>
        </Grid>
      </Grid>
      {selectedVehicleId && (
        <Box mt={4} pl={4}>
          <Typography variant="h5" gutterBottom>
            Vehicle ID: {selectedVehicleId}
          </Typography>
          <VehicleUpdateForm
            vehicleId={selectedVehicleId}
            onUpdate={handleUpdateVehicle}
            onDelete={handleDeleteVehicle}
          />
        </Box>
      )}
      {!selectedVehicleId && <Typography>Select a vehicle to update or delete.</Typography>}
    </Box>
  );
}

export default VehicleRoute;
