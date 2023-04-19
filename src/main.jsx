import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' 
import AuthContextProvider from './components/contexts/authContext'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
  </React.StrictMode>,
)
