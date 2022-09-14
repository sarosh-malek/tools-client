import React, { useState } from 'react';
import { Login } from './components/login';
import { SignIn } from './components/signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';

function App() {
  const [count, setCount] = useState(0);

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
