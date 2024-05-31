import TituloInicial from "./TituloInicial"
import Apresentacao from "./Apresentacao"
import Receitas from "./Receitas"

export default function Corpo(){
    return(
        <main>
            <TituloInicial/>
            <Apresentacao/>
            <Receitas/>
        </main>
    )
}