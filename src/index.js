import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom';

import './index.css';
import Home from './Pages/Home';
import Place from './Pages/Place';
import NotFound from './Pages/NotFound';
import About from './Pages/About';

const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <NotFound /> },
  { path: '/place', element: <Place /> },
  { path: '/about', element: <About /> },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

