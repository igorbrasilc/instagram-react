import Topo from "./Topo";
import Conteudo from "./Conteudo";
import Fundo from "./Fundo";

export default function Post(props) {
    const {imgTopo, usuarioTopo, imgConteudo, imgFundo, usuarioFundo, qtdCurtidas} = props;
return (
<div class="post">
    <Topo img={imgTopo} usuario={usuarioTopo} />
    <Conteudo img={imgConteudo} />
    <Fundo img={imgFundo} usuario={usuarioFundo} quantidade={qtdCurtidas} />
</div>
)
}