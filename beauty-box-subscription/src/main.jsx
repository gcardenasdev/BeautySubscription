import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Confirmation from './Confirmation/Confirmation.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/confirmation' element={<Confirmation/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
