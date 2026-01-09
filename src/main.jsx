import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CartContext from './context/CartContext.jsx'
import LikeContext from './context/LikeContext.jsx'
import ChangeLanguage from './context/ChangeLanguage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContext>
      <LikeContext>
        <ChangeLanguage>
          <App />
        </ChangeLanguage>
      </LikeContext>
    </CartContext>
  </StrictMode>,
)
