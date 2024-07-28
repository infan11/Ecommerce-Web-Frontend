import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import { ThemeProvider } from '@material-tailwind/react'
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
   
    <Toaster/>
  <div className='bg-white'>
  <ThemeProvider>
  <RouterProvider router={router} />
    </ThemeProvider>
  </div>
  </AuthProvider>
  </React.StrictMode>,
)
