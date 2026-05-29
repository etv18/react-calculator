import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CalButton from './components/calButton'

import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CalButton></CalButton>
  </StrictMode>,
)
