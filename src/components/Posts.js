import Fundo from "./Fundo";

export default function Posts() {
    return (
    <div class="posts">
      <div class="post">
        <Topo img="./assets/img/meowed.svg" usuario="meowed" />
        <Conteudo img="./assets/img/gato-telefone.svg" />
        <Fundo img="./assets/img/respondeai.svg" usuario="respondeai" quantidade="101.523"/>
      </div>
      <div class="post">
        <Topo img="./assets/img/barked.svg" usuario="barked" />
        <Conteudo img="./assets/img/dog.svg" />
        <Fundo img="./assets/img/adorable_animals.svg" usuario="adorable_animals" quantidade="99.159"/>
      </div>        
    </div>
    )
}

// function Post(props) {
//   return (
//     <div class="post">
//       <Topo img="./assets/img/meowed.svg" usuario="meowed" />
//       <Conteudo img="./assets/img/gato-telefone.svg" />
//       <Fundo img="./assets/img/respondeai.svg" usuario="respondeai" quantidade="101.523"/>
//     </div>
//   )
// }

function Topo(props) {
  return (
    <div class="topo">
        <div class="usuario">
          <img src={props.img} />
          {props.usuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
  )
}

function Conteudo(props) {
  return (
    <div class="conteudo">
      <img src={props.img} />
    </div>
  )
}