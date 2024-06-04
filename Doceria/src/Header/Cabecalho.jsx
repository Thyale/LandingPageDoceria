import MenuLateral from "./MenuLateral"
import Transparencia from "./Transparencia"

export default function Cabecalho(){

    function OpenMenuLateral(){
        window.document.querySelector("div.MenuLateralDiv").style.display = "block"
        window.document.querySelector("div.Tranparencia").style.display = "block"
    }

    return(
        <header>
            <ul>
                <li><a href="#Apresentacao">SOBRE</a></li>
                <li><a href="#Receitas">RECEITAS</a></li>
                <li><a href="#PodCast">PODCAST</a></li>
            </ul>
            <h1>DULCE</h1>
            <ul>
                <li><a href="#Cursos">CURSOS</a></li>
                <li><a href="#Treinamento">TREINAMENTO</a></li>
                <li><a href="#Loja">LOJA</a></li>
            </ul>
            <span onClick={OpenMenuLateral} id="menu" class="material-symbols-outlined">menu</span>
            <Transparencia/>
            <MenuLateral/>
        </header>
    )
}