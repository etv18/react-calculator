import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Calculator from './components/Calculator'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <Calculator></Calculator>
    </div>
  </StrictMode>,
)
