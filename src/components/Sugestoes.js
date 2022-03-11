export default function Sugestoes() {
    return (
        <div class="sugestoes">
            <Titulo />
            <Sugestao img="./assets/img/bad.vibes.memes.svg" usuario="bad.vibes.memes" />
            <Sugestao img="./assets/img/chibirdart.svg" usuario="chibirdart" />
            <Sugestao img="./assets/img/razoesparaacreditar.svg" usuario="razoesparaacreditar" />
            <Sugestao img="./assets/img/adorable_animals.svg" usuario="adorable_animals" />
            <Sugestao img="./assets/img/smallcutecats.svg" usuario="smallcutecats" />
        </div>
    )
}

function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
            <img src={props.img} />
            <div class="texto">
                <div class="nome">{props.usuario}</div>
                <div class="razao">Segue você</div>
            </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    )
}

function Titulo() {
    return (
    <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
    </div>
    )
}