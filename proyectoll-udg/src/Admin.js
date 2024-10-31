// src/Admin.js

import './AdminFuturistic.css';
import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Select, MenuItem } from '@mui/material';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';
import CurrencyRates from './CurrencyRates';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

const Admin = () => {
  const clientes = [
    { id: 1, nombre: 'Juan Pérez', historial: 'Historial detallado...', inversiones: '$5000', crecimiento: '20%' },
    { id: 2, nombre: 'Ana Gómez', historial: 'Historial detallado...', inversiones: '$8000', crecimiento: '35%' },
  ];

  const [action, setAction] = useState({});

  const handleActionChange = (clienteId, action) => {
    setAction((prev) => ({ ...prev, [clienteId]: action }));
    if (action === "Editar") {
      console.log(`Editando cliente ${clienteId}`);
    } else if (action === "Eliminar") {
      console.log(`Eliminando cliente ${clienteId}`);
    }
  };

  const dataBar = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
    datasets: [
      { label: 'Inversiones', data: [12000, 15000, 14000, 17000], backgroundColor: 'rgba(75, 192, 192, 0.6)' },
      { label: 'Ganancias', data: [4000, 5000, 3000, 6000], backgroundColor: 'rgba(153, 102, 255, 0.6)' },
    ],
  };

  const dataLine = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
    datasets: [
      { label: 'Crecimiento de clientes', data: [5, 10, 15, 20], fill: false, borderColor: 'rgba(255, 99, 132, 0.6)' },
    ],
  };

  return (
    <Container maxWidth="lg" className="container">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" gutterBottom>Panel de Administración</Typography>
        <div className="currency-rates">
          <CurrencyRates />
        </div>
      </Box>

      <Grid container spacing={3}>
        {/* Tabla de clientes */}
        <Grid item xs={12} md={9}>
          <Paper className="table-container">
            <Typography variant="h6" gutterBottom>Clientes</Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Historial</TableCell>
                  <TableCell>Inversiones</TableCell>
                  <TableCell>Crecimiento</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {clientes.map((cliente) => (
                  <TableRow key={cliente.id}>
                    <TableCell>{cliente.id}</TableCell>
                    <TableCell>{cliente.nombre}</TableCell>
                    <TableCell>{cliente.historial}</TableCell>
                    <TableCell>{cliente.inversiones}</TableCell>
                    <TableCell>{cliente.crecimiento}</TableCell>
                    <TableCell>
                      <Select
                        value={action[cliente.id] || ""}
                        onChange={(e) => handleActionChange(cliente.id, e.target.value)}
                        displayEmpty
                        className="select-action"
                      >
                        <MenuItem value="" disabled>Selecciona acción</MenuItem>
                        <MenuItem value="Editar">Editar</MenuItem>
                        <MenuItem value="Eliminar">Eliminar</MenuItem>
                      </Select>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>

        {/* Gráficas en una única columna a la derecha */}
        <Grid item xs={12} md={3}>
          <Paper className="chart-container">
            <Typography variant="h6" gutterBottom>Inversiones y Ganancias</Typography>
            <Bar data={dataBar} />
          </Paper>
          <Paper className="chart-container" style={{ marginTop: '1rem' }}>
            <Typography variant="h6" gutterBottom>Crecimiento de Clientes</Typography>
            <Line data={dataLine} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Admin;
