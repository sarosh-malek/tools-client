import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';

function App() {
  const getRoutes = routes.map((e, i) => {
    return <Route key={i} path={e.path} element={<e.component />} />;
  });

  return (
    <BrowserRouter>
      <Routes>{getRoutes}</Routes>
    </BrowserRouter>
  );
}

export default App;
