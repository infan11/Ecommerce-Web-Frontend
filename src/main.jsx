import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import { ThemeProvider } from '@material-tailwind/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='body'>
  <ThemeProvider>
  <RouterProvider router={router} />
    </ThemeProvider>
  </div>
  </React.StrictMode>,
)
