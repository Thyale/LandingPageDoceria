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
                    <li><a href="#">SOBRE</a></li>
                    <li><a href="#">RECEITAS</a></li>
                    <li><a href="#">PODCAST</a></li>
                    <li><a href="#">CURSOS</a></li>
                    <li><a href="#">TREINAMENTO</a></li>
                    <li><a href="#">LOJA</a></li>
                </ul>
            </nav>
        </div>
    )
}