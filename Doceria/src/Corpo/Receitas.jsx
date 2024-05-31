import Mousse from "../img/MOUSSE.RECEITA.jpg"
import Brown from "../img/BROWN.RECEITA.jpg"
import Bisco from "../img/BISCO.RECEITA.jpg"
import Pudim from "../img/PUDIM.RECEITA.jpg"

export default function Receitas(){
    return(
        <div id="Receitas">
            <p>Algumas das minhas receitas <strong>especiais</strong></p>
            <div>
                <a href="https://www.youtube.com/watch?v=ytMi-OCjFX8&pp=ygUecmVjZWl0YSBkZSBtb3Vzc2UgZGUgbWFyYWN1asOh" target="_Blanck"><img src={Mousse} alt="Foto de mousse" /></a>
                <a href="https://www.youtube.com/watch?v=W0Oi_KSLs9Y" target="_Blanck"><img src={Brown} alt="Foto de mousse" /></a>
                <a href="https://www.youtube.com/watch?v=kWFfOV0mmi8" target="_Blanck"><img src={Bisco} alt="Foto de mousse" /></a>
                <a href="https://www.youtube.com/watch?v=GAxLcwSQW40" target="_Blanck"><img src={Pudim} alt="Foto de mousse" /></a>
            </div>
        </div>
    )
}