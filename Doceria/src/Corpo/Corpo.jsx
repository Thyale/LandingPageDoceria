import TituloInicial from "./TituloInicial"
import Apresentacao from "./Apresentacao"
import Receitas from "./Receitas"
import PodCast from "./PodCast"
import Cursos from "./Cursos"
import Treinamento from "./Treinamento"

export default function Corpo(){
    return(
        <main>
            <TituloInicial/>
            <Apresentacao/>
            <Receitas/>
            <PodCast/>
            <Cursos/>
            <Treinamento/>
        </main>
    )
}