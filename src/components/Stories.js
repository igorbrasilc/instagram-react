import Story from "./Story";

const stories = [
  {usuario: "9gag", img: "./assets/img/9gag.svg"},
  {usuario: "meowed", img: "./assets/img/meowed.svg"},
  {usuario: "barked", img: "./assets/img/barked.svg"},
  {usuario: "nathanwpylestrangeplanet", img: "./assets/img/nathanwpylestrangeplanet.svg"},
  {usuario: "wawawicomics", img: "./assets/img/wawawicomics.svg"},
  {usuario: "respondeai", img: "./assets/img/respondeai.svg"},
  {usuario: "filomoderna", img: "./assets/img/filomoderna.svg"},
  {usuario: "memeriagourmet", img: "./assets/img/memeriagourmet.svg"}
];

export default function Stories() {
    return (
      <div class="stories">
        {stories.map(story => <Story img={story.img} usuario={story.usuario} />)}
        <Setinha />
      </div>
    )
}

function Setinha() {
  return (
  <div class="setinha">
    <ion-icon name="chevron-forward-circle"></ion-icon>
  </div>
  )
}