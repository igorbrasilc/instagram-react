

export default function Usuario(props) {
    const {img, nickname, name} = props;
    return (
        <div class="usuario">
            <img src={img} />
            <div class="texto">
            <strong>{nickname}</strong>
            {name}
            </div>
        </div>
    )
}