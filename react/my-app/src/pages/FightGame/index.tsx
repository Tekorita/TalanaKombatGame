import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'
import axios from 'axios'

import StaloneFavicon from '../../media/stalone_favicon.png'
import ArnolFavicon from '../../media/arnold_favicon.png'
import StaloneAttacs from '../../media/stalone_attacs.png'
import ArnolAttacs from '../../media/arnold_attacs.png'

const MyComponent: React.FC = () => {
  const [inputValueP1, setInputValueP1] = useState('');
  const [inputValueP2, setInputValueP2] = useState('');

  const enviarAtaques = async () => {
    const ataquesP1 = separarAtaques(inputValueP1);
    const ataquesP2 = separarAtaques(inputValueP2);
    console.log("hola", ataquesP1)
    try {
      const response_action = await axios.post('http://localhost:8000/action/', 
        {
          player1: ataquesP1,
          player2: ataquesP2
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log("response", response_action)
      console.log('Solicitud enviada correctamente');
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  const separarAtaques = (inputValue: string) => {
    const movimientos: string[] = [];
    const golpes: string[] = [];

    inputValue.split('').forEach((char: string) => {
      if (char === 'd' || char === 's') {
        movimientos.push(char.toUpperCase());
      } else if (char === 'k' || char === 'p') {
        golpes.push(char.toUpperCase());
      }
    });
    return { movimientos, golpes };
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, player: 1 | 2) => {
    const inputValue = event.target.value;
    const regexPatterns: { [key in 1 | 2]: RegExp } = {
      1: /^[dspkDSPK]*$/, // Expresión regular para permitir solo d, s, p, k (mayúsculas o minúsculas) para Player 1
      2: /^[aspkASPK]*$/  // Expresión regular para permitir solo a, s, p, k (mayúsculas o minúsculas) para Player 2
    };
    const regex = regexPatterns[player];
  
    if (regex.test(inputValue) || inputValue === '') {
      if (player === 1) {
        setInputValueP1(inputValue);
      } else {
        setInputValueP2(inputValue);
      }
    }
  };

  return (
    <Box>
      <h1 style={{ textAlign: 'center' }}>Kombat Talana</h1>

      {/* Box grande */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '300px',
          marginLeft: '500px',
          marginRight: '500px'
        }}
      >
        {/* Primer box con imagen y texto */}
        <Box sx={{ marginRight: '10px', textAlign: 'center' }}>
          <img src={StaloneFavicon} alt="Image 1" style={{ width: '200px', height: '200px' }} />
          <img src={StaloneAttacs} alt="Image 1" style={{ width: '350px', height: '250px' }} />
          <TextField
            label="Input de ataque"
            variant="outlined"
            fullWidth 
            value={inputValueP1}
            onChange={(e) => handleInputChange(e as React.ChangeEvent<HTMLInputElement>, 1)}
            inputProps={{ maxLength: 6 }}
          />
          <Button onClick={enviarAtaques} component="a" variant="contained">
            Enviar Ataque
          </Button>
        </Box>

        {/* Segundo box con imagen y texto */}
        <Box sx={{ marginLeft: '10px', textAlign: 'center' }}>
          <img src={ArnolFavicon} alt="Image 2" style={{ width: '200px', height: '200px' }} />
          <img src={ArnolAttacs} alt="Image 1" style={{ width: '350px', height: '250px' }} />
          <TextField
            label="Input de ataque"
            variant="outlined"
            fullWidth 
            value={inputValueP2}
            onChange={(e) => handleInputChange(e as React.ChangeEvent<HTMLInputElement>, 2)}
            inputProps={{ maxLength: 6 }}
          />
          <Button onClick={enviarAtaques} component="a" variant="contained">
            Enviar Ataque
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default MyComponent;