function adicionar(evento) {
    evento.preventDefault();

    if (evento.target[0].value === "" && evento.target[1].value === "") {
        alert("Preencha os campos Produto e Quantidade");
        console.log("Aloo");
        return;
    }

    if (evento.target[0].value === "") {
        alert("Preencha o campo Produto");
        console.log("Aloo");
        return;
    }

    if (evento.target[1].value === "") {
        alert("Preencha o campo Quantidade");
        console.log("Aloo");
        return;
    }

    const produto = "Produto: " + evento.target[0].value;
    const quantidade = "Quantidade: " + evento.target[1].value;

    const li = document.createElement("li");
    li.textContent = produto + " | " + quantidade;

    li.addEventListener('click', () => remover(li));

    const ul = document.querySelector(".container");

    ul.appendChild(li);

    evento.target[0].value = " ";
    evento.target[1].value = " ";

}

function remover(elemento) {
    elemento.remove();
}
