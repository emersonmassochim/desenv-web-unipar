function adicionar(evento) {

    evento.preventDefault();

    if (evento.target[0].value === "" && evento.target[1].value === "") {
        alert("Preencha os campos Tarefa e Data");
        return;
    }

    if (evento.target[0].value === "") {
        alert("Preencha o campo Tarefa");
        return;
    }

    if (evento.target[1].value === "") {
        alert("Preencha o campo Data");
        return;
    }

    const tarefa = "Tarefa: " + evento.target[0].value;
    const data = "Data de Entrega: " + evento.target[1].value;

    const li = document.createElement("li");
    li.textContent = tarefa + " | " + data;

    li.addEventListener('click', () => remover(li));

    const ul = document.querySelector(".container");

    ul.appendChild(li);

    evento.target[0].value = " ";
    evento.target[1].value = " ";

}

function remover(elemento) {
    elemento.remove();
}
