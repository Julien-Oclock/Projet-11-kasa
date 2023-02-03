import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom';

import './index.scss';
import Home from './Pages/Home';
import Place from './Pages/Place';
import NotFound from './Pages/NotFound';
import About from './Pages/About';

const router = createBrowserRouter([
  { 
    // home page path
    path: '/', 
    element: <Home />, 
    errorElement: <NotFound /> 
  },
  { 
    // place page path
    path: '/place', 
    element: <Place /> 
  },
  { 
    // about page path
    path: '/about',
    element: <About /> 
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

