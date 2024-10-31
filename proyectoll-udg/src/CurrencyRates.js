// src/CurrencyRates.js

import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const CurrencyRates = () => {
  //  divisas
  const rates = {
    usd: 1.00,
    eur: 0.85,
    mxn: 20.00,
    btc: 0.000023,
  };

  return (
    <Paper elevation={3} sx={{ padding: 2, display: 'inline-block', textAlign: 'right' }}>
      <Typography variant="h6">Tasas de Cambio</Typography>
      <Box>
        <Typography variant="body1">USD: ${rates.usd.toFixed(2)}</Typography>
        <Typography variant="body1">EUR: €{rates.eur.toFixed(2)}</Typography>
        <Typography variant="body1">MXN: ${rates.mxn.toFixed(2)}</Typography>
        <Typography variant="body1">BTC: ₿{rates.btc.toFixed(5)}</Typography>
      </Box>
    </Paper>
  );
};

export default CurrencyRates;
