import React from 'react'
import ReactDOM from 'react-dom/client'
import "./Style.css"

import Cabecalho from './Header/Cabecalho'
import Corpo from './Corpo/Corpo'
import Footer from './Rodape/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cabecalho />    {/*Header - Cabeçalho do site*/}
    <Corpo/>         {/*main - Todo o corpo do site*/}
    <Footer/>        {/*Footer - Rodapé do site*/}
  </React.StrictMode>,
)
