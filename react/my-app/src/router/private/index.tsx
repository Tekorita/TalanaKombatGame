import React from 'react';
import { Route } from 'react-router-dom';
import ArnoldPage from '../../pages/ArnoldPage'; // Importa el componente ArnoldPage

const PrivateRoutes = () => {
  return (
    <Route path="/arnold/" element={<ArnoldPage />} />
  );
}

export default PrivateRoutes;
