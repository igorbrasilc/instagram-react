import Logo from "./Logo";
import LogoMobile from "./LogoMobile";
import Icones from "./Icones";
import IconesMobile from "./IconesMobile";
import InstagramMobile from "./InstagramMobile";
import Pesquisa from "./Pesquisa";

export default function Navbar() {
    return (
    <div class="navbar">
        <div class="container">
            <Logo />
            <LogoMobile />
            <InstagramMobile />
            <Pesquisa />
            <Icones />
            <IconesMobile />
        </div>
    </div>
    )
}



