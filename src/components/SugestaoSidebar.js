export default function SugestaoSidebar(props) {
    const {img, usuario} = props;
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={img} />
                <div class="texto">
                    <div class="nome">{usuario}</div>
                    <div class="razao">{usuario === "razoesparaacreditar" ? "Novo no Instagram" : "Segue você"}</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    )
}