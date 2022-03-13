import TituloSidebar from "./TituloSidebar";
import SugestaoSidebar from "./SugestaoSidebar";

const sugestoes = [
    {img: "./assets/img/bad.vibes.memes.svg", usuario: "bad.vibes.memes"},
    {img: "./assets/img/chibirdart.svg", usuario: "chibirdart"},
    {img: "./assets/img/razoesparaacreditar.svg", usuario: "razoesparaacreditar"},
    {img: "./assets/img/adorable_animals.svg", usuario: "adorable_animals"},
    {img: "./assets/img/smallcutecats.svg", usuario: "smallcutecats"}
];

export default function Sugestoes() {
    return (
        <div class="sugestoes">
            <TituloSidebar />
            {sugestoes.map(sugestao => <SugestaoSidebar img={sugestao.img} usuario={sugestao.usuario} />)}
        </div>
    )
}