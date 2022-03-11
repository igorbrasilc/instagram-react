export default function Fundo(props) {
    return (
    <div class="fundo">
        <Acoes />
        <div class="curtidas">
            <img src={props.img} />
            <div class="texto">
            Curtido por <strong>{props.usuario}</strong> e <strong>outras {props.quantidade} pessoas</strong>
            </div>
        </div>
    </div>
    )
}

function Acoes() {
    return (
    <div class="acoes">
        <div>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
        <ion-icon name="bookmark-outline"></ion-icon>
        </div>
    </div>
    )
}