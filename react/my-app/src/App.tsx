import React from 'react';
// import { Link } from 'react-router-dom';

import {
  Button, 
  Box
}from '@mui/material';

import landing_image from './media/landing3.png'
import './App.css';

function App() {
  return (
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
        {/* <Link to="/otra-pagina"> */}
          <Button variant="contained" style={{ backgroundColor: '#434343', fontSize: '1.5rem', padding: '12px 54px', marginRight: '40px'}}>
            Iniciar juego
          </Button>
        {/* </Link> */}
      </Box>
        
    </div>
  );
}

export default App;
