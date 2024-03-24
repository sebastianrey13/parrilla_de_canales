import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './routes/Home.jsx'
import TigoEspecialH from './routes/TigoEspecialH.jsx'
import TigoAvanzadaH from './routes/TigoAvanzadaH.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Navigate to={"/home"} />} />
          <Route path='/home' element={<Home />} />
          <Route path='/tigo-especial' element={<TigoEspecialH/>}/>
          <Route path='/tigo-avanzada' element={<TigoAvanzadaH/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
