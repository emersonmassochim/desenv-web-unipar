import "./App.css"
import Article from "./componets/Article";
import Header from "./componets/Header";

export default function App() {

  const quantidadePosts = 16;
  const habilitado = false;

  return (
    <main id="container">
      <Header quantidadePosts={quantidadePosts} habilitado={habilitado} />
      <section>
        <h1>Nossos Ultimos Posts</h1>
        <Article
          titulo="Flamengo 2 x 1 Corinthians"
          texto="Nos 45 do Segunto Tempo, BH marcou o gol da vitória do Flamengo"
        />
        <Article
          titulo="Palmeiras KKKKKKKKKKKKKKKKKKKKKKKKKKKK x 3 LDU"
          texto="Palmeiras Perdeu o jogo, mas passa nos pênaltis"
        />
        <Article
          titulo="Altético-MG 4 x 2 Santos"
          texto="Altético-MG venceu o jogo por 4 a 2, e passou nos pênaltis"
        />
        <Article
          titulo="São Paulo 1 x 1 Boca Junior"
          texto="São Paulo joga mal, não reverte o 1x0 da ida e é eliminado"
        />
        <Article
          titulo="Fluminense 2 x 1 CA Platense"
          texto="Fluminense segura a pressão e passa de fase"
        />
      </section>
    </main>


  );
}