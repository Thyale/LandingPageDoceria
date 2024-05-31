export default function TituloInicial(){
    return(
        <div className="TituloInicial">
            <div className="TituloInicial_Conteudo">
                <div>
                   <h1>Doce é a Vida!</h1>
                   <p className="TituloInicial_Conteudo_subtitulo">Bem-vindo à Dulce</p>
                   <p className="TituloInicial_Conteudo_Texto1">Na Dulce, preparamos doces artesanais com ingredientes selecionados e um toque especial de amor.</p>
                   <p className="TituloInicial_Conteudo_Texto2">Descubra o sabor da felicidade em cada mordida</p>
                </div>
                <div className="TituloInicial_Conteudo_BTNS">
                    <button><a href="#Receitas">BISCOITO</a></button>
                    <button><a href="#Receitas">BROWNIE</a></button>
                    <button><a href="#Receitas">MOUSSE</a></button>
                    <button><a href="#Receitas">PUDIM</a></button>
                </div>
            </div>
        </div>
    )
}