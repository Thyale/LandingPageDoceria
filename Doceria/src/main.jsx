import React from 'react'
import ReactDOM from 'react-dom/client'
import "./Style.css"

import Cabecalho from './Header/Cabecalho'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cabecalho />    {/*Header - Cabeçalho do site*/}
  </React.StrictMode>,
)
