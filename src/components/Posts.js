import Post from "./Post";

const conteudos = [
{imgTopo: "./assets/img/meowed.svg", usuarioTopo: "barked", imgConteudo: "./assets/img/gato-telefone.svg",
imgFundo: "./assets/img/respondeai.svg", usuarioFundo: "respondeai", qtdCurtidas: "101.523"},
{imgTopo: "./assets/img/barked.svg", usuarioTopo: "meowed", imgConteudo: "./assets/img/dog.svg",
imgFundo: "./assets/img/adorable_animals.svg", usuarioFundo: "adorable_animals", qtdCurtidas: "99.159"}
]

export default function Posts() {
    return (
    <div class="posts">
      {conteudos.map(conteudo =>
      <Post imgTopo={conteudo.imgTopo} usuarioTopo={conteudo.usuarioTopo} imgConteudo={conteudo.imgConteudo}
      imgFundo={conteudo.imgFundo} usuarioFundo={conteudo.usuarioFundo} qtdCurtidas={conteudo.qtdCurtidas} />
      )}      
    </div>
    )
}