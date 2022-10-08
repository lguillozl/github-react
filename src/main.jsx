import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStylesStyled } from './components/GlobalStyles'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <GlobalStylesStyled />
      <App />
    </>
  </React.StrictMode>
)
