import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Home from './Pages/Home'
import Place from './Pages/Place'
import NotFound from './Pages/NotFound'
import About from './Pages/About'

const router = createBrowserRouter([
    {
        // home page path
        path: '/',
        element: <Home />,
        errorElement: <NotFound />
    },
    {
        // home page path secondary link
        path: '/home',
        element: <Home />,
        errorElement: <NotFound />
    },
    {
        // place page path
        path: '/place/:id',
        element: <Place />,
        errorElement: <NotFound />
    },
    {
        // about page path
        path: '/about',
        element: <About />
    },
    {
        // about page path
        path: '/4o4',
        element: <NotFound />
    }
])

export default router
