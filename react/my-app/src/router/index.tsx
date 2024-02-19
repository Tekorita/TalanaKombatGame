import React from 'react';

import { BrowserRouter as Router, Routes } from 'react-router-dom';
import PrivateRoutes from '../router/private'
import App from '../App';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <PrivateRoutes />
        {/* <Route path="/" element={<App />} />
        <Route path="/arnold-page" element={<ArnoldPage />} /> */}
      </Routes>
    </Router>
  );
}

export default AppRouter;