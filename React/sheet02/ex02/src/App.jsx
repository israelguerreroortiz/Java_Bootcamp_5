import './App.css'
import Formulario from './components/formulario'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


function App() {

  return (
    <>
      <Formulario />
    </>
  )
}

export default App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
