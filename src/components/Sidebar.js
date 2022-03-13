import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";
import Links from "./Links";
import Copywright from "./Copywright";

const usuario = {img: "assets/img/catanacomics.svg", nickname: "catanacomics", name: "Catana"};
const {img, nickname, name} = usuario;

export default function Sidebar() {
    return (
    <div class="sidebar">
        <Usuario img={img} nickname={nickname} name={name} />
        <Sugestoes />
        <Links />
        <Copywright />
    </div>
    )
}