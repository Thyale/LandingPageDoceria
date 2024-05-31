import React from 'react'
import ReactDOM from 'react-dom/client'
import "./Style.css"

import Cabecalho from './Header/Cabecalho'
import Corpo from './Corpo/Corpo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cabecalho />    {/*Header - Cabeçalho do site*/}
    <Corpo/>         {/*main - Todo o corpo do site*/}
  </React.StrictMode>,
)
