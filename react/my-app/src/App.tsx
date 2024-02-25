import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import {
  Button, 
  Box
}from '@mui/material';

import FightGame from './pages/FightGame';
import landing_image from './media/landing3.png'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/FightGame" element={<FightGame />} /> 
        <Route path="/" element={
          <div style={{
            backgroundImage: `url(${landing_image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
          }}>
            <Box
              sx={{
                alignSelf: 'center',
                marginLeft: '30px',
                marginTop: '800px'
              }}
            >
            <Button component="a" href="/FightGame" variant="contained" style={{ backgroundColor: '#434343', fontSize: '1.5rem', padding: '12px 54px', marginRight: '40px'}}>
              Iniciar juego
            </Button>
            </Box>
          </div>
        } />   
      </Routes>
    </Router>
  );
}

export default App;
