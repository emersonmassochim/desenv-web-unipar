import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Article from "./components/Article";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import "./App.css";

function App() {

    const post = {
        titulo: "A Nova Série de TV de Harry Potter Chegou!",
        autor: "Emerson Massochim",
        data: "01/10/2026",
        conteudo: "Acompanhe aqui todas as novidades, teorias e curiosidades sobre a nova série baseada nos livros que está movimentando o mundo bruxo."
    };

    return (
        <div>
            <Header />
            <Navigation />

            <main>
                <Article
                    titulo={post.titulo}
                    autor={post.autor}
                    data={post.data}
                    conteudo={post.conteudo}
                />

                <Sidebar />
            </main>

            <Footer />
        </div>
    );
}

export default App;