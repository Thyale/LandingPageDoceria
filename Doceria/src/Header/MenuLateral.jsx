import Transparencia from "./Transparencia"
export default function MenuLateral(){

    function CloseMenu(){
        window.document.querySelector("div.MenuLateralDiv").style.display = "none"
        window.document.querySelector("div.Tranparencia").style.display = "none"
    }

    return(
        <div className="MenuLateralDiv">
            <nav>
                <span onClick={CloseMenu} id="close" class="material-symbols-outlined">close</span>
                <ul className="MenuLateralUl">
                    <li><a onClick={CloseMenu} href="#Apresentacao">SOBRE</a></li>
                    <li><a onClick={CloseMenu} href="#Receitas">RECEITAS</a></li>
                    <li><a onClick={CloseMenu} href="#PodCast">PODCAST</a></li>
                    <li><a onClick={CloseMenu} href="#Cursos">CURSOS</a></li>
                    <li><a onClick={CloseMenu} href="#Treinamento">TREINAMENTO</a></li>
                    <li><a onClick={CloseMenu} href="#Loja">LOJA</a></li>
                </ul>
            </nav>
        </div>
    )
}