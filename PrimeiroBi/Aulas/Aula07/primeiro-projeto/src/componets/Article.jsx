export default function Article(props) {
    return (
        <article>
            <h1>{props.titulo}</h1>
            <p>{props.texto}</p>
        </article>
    );
} 