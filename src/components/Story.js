export default function Story(props) {
const {img, usuario} = props;
return (
    <div class="story">
        <div class="imagem">
            <img src={img} />
        </div>
        <div class="usuario">
            {usuario}
        </div>
    </div>
)
}