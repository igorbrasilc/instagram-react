export default function Topo(props) {
    const {img, usuario} = props;
    return (
    <div class="topo">
        <div class="usuario">
            <img src={img} />
            {usuario}
        </div>
        <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
    </div>
    )
  }