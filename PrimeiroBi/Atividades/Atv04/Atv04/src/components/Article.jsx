function Article(props) {
    return (
        <article className="post">
            <h2>{props.titulo}</h2>

            <p>Autor: {props.autor}</p>

            <p>Data: {props.data}</p>

            <p>{props.conteudo}</p>
        </article>
    );
}

export default Article;