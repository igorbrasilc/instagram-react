import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";
import Links from "./Links";
import Copywright from "./Copywright";



export default function Sidebar() {
    return (
    <div class="sidebar">
        <Usuario />
        <Sugestoes />
        <Links />
        <Copywright />
    </div>
    )
}