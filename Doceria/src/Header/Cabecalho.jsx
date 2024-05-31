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
                <li><a href="#">SOBRE</a></li>
                <li><a href="#">RECEITAS</a></li>
                <li><a href="#">PODCAST</a></li>
            </ul>
            <h1>DULCE</h1>
            <ul>
                <li><a href="#">CURSOS</a></li>
                <li><a href="#">TREINAMENTO</a></li>
                <li><a href="#">LOJA</a></li>
            </ul>
            <span onClick={OpenMenuLateral} id="menu" class="material-symbols-outlined">menu</span>
            <Transparencia/>
            <MenuLateral/>
        </header>
    )
}