export default function Header(props) {
    return (
        <header>

            <h1>Header do Site</h1>
            <h1 className={` ${props.habilitado ? "ativo" : "inativo"}`}>Cabeçalho Show</h1>
            <p>Quantidade de Posts: {props.quantidadePosts}</p>
        </header>
    );


}