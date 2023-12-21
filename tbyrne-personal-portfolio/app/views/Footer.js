import { Container, Grid, Typography, Button } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import '../globals.css';


const footerStyle = {
    height: 48,
    backgroundColor: 'var(--background-color-tertiary)',
  };


export default function Footer() {
    return (
            <Box component="section" sx={{...footerStyle}}>
            </Box>
    );
  }