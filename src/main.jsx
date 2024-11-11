import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' 
import AuthContextProvider from '../src/context/authContext'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
  </React.StrictMode>,
)
