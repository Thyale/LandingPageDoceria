import FotodeDulce from "../img/Fotodeperfil.jpg"

export default function Apresentacao(){
    return(
        <div id="Apresentacao">
            <div className="Apresentacao_Texto">
                <p className="Apresentacao_Texto_one">Olá, sou Adriana, a fundadora da Dulce</p>
                <p className="Apresentacao_Texto_Subtitulo">Gostaria de compartilhar com você como tudo começou.</p>
                <p>Desde criança, eu sempre fui apaixonada por doces, aprendendo os segredos da confeitaria com minha avó. Depois de receber muitos elogios pelos doces que preparei para uma festa de aniversário, decidi transformar minha paixão em um negócio e comecei a vender meus doces para amigos e vizinhos. O sucesso foi imediato!</p>
                <p>Com o aumento da demanda, resolvi abrir minha própria doceria e escolhi o nome "Dulce" por seu significado simples e doce. Encontrei um espaço aconchegante e abri as portas da Dulce, que logo se tornou um ponto de encontro na comunidade.</p>
                <p className="Apresentacao_Texto_Filosofia">Minha filosofia sempre foi simples: cada doce deve trazer um sorriso e aquecer o coração.</p>
            </div>
            <div className="Apresentacao_Imagem">
                <img src={FotodeDulce} alt="Foto de apresentação de Dulce" />
            </div>
        </div>
    )
}