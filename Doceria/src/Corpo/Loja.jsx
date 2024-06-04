import BoloDecorado from "../img/BoloDecorado.jpg"
import BrigadeirosGourmet from "../img/BrigadeirosGourmet.jpg"
import CupcakesVariados from "../img/CupcakesVariados.jpg"
import CookiesArtesanais from "../img/CookiesArtesanais.jpg"
import TortasCheesecakes from "../img/TortasCheesecakes.jpg"
import MacaronsColoridos from "../img/MacaronsColoridos.jpg"
import CaixasDoces from "../img/CaixasDoces.jpg"
import BrowniesBlondies from "../img/BrowniesBlondies.jpg"
import SobremesaPote from "../img/SobremesaPote.jpg"
import KitsFesta from "../img/KitsFesta.jpg"

export default function Loja(){
    return(
        <div id="Loja">
            <div className="Loja_Titulo">
                <p className="Loja_Titulo_BoasVindas">Bem-vindo à Loja da Dulce</p>
                <p className="Loja_Titulo_Principal">Descubra nossas delícias artesanais</p>
            </div>
            <div className="Loja_DivGeral">
                <div>
                    <img src={BoloDecorado}/>
                    <p className="Loja_DivGeral_Titulo">Bolos Decorados</p>
                    <p className="Loja_DivGeral_Valor">R$150,00</p>
                </div>
                <div>
                    <img src={BrigadeirosGourmet}/>
                    <p className="Loja_DivGeral_Titulo">Brigadeiros Gourmet</p>
                    <p className="Loja_DivGeral_Valor">R$3,00 <strong>UNIDADE</strong></p>
                </div>
                <div>
                    <img src={CupcakesVariados}/>
                    <p className="Loja_DivGeral_Titulo">Cupcakes Variados</p>
                    <p className="Loja_DivGeral_Valor">R$8,00 <strong>UNIDADE</strong></p>
                </div>
                <div>
                    <img src={CookiesArtesanais}/>
                    <p className="Loja_DivGeral_Titulo">Cookies Artesanais</p>
                    <p className="Loja_DivGeral_Valor">R$6,00 <strong>UNIDADE</strong></p>
                </div>
                <div>
                    <img src={TortasCheesecakes}/>
                    <p className="Loja_DivGeral_Titulo">Tortas e Cheesecakes</p>
                    <p className="Loja_DivGeral_Valor">R$80,00</p>
                </div>
                <div>
                    <img src={MacaronsColoridos}/>
                    <p className="Loja_DivGeral_Titulo">Macarons Coloridos</p>
                    <p className="Loja_DivGeral_Valor">R$4,00 <strong>UNIDADE</strong></p>
                </div>
                <div>
                    <img src={CaixasDoces}/>
                    <p className="Loja_DivGeral_Titulo">Caixas de Doces</p>
                    <p className="Loja_DivGeral_Valor">R$50,00</p>
                </div>
                <div>
                    <img src={BrowniesBlondies}/>
                    <p className="Loja_DivGeral_Titulo">Brownies e Blondies</p>
                    <p className="Loja_DivGeral_Valor">R$10,00 <strong>UNIDADE</strong></p>
                </div>
                <div>
                    <img src={SobremesaPote}/>
                    <p className="Loja_DivGeral_Titulo">Sobremesas de Pote</p>
                    <p className="Loja_DivGeral_Valor">R$12,00</p>
                </div>
                <div>
                    <img src={KitsFesta}/>
                    <p className="Loja_DivGeral_Titulo">Kits de Festa</p>
                    <p className="Loja_DivGeral_Valor">R$200,00</p>
                </div>
            </div>
            <a href="#">RESERVE JÁ O SEU</a>
        </div>
    )
}