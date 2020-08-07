// Procurar o botao
document.querySelector("#add-time")
//quando clicar no botao
.addEventListener("click", clonefield)


// Executar uma ação
function clonefield() {
    //duplicar os campos
    //mais que campos??
    const field = document.querySelector(".schedule-item").cloneNode(true)

    //colocar na pagina
    //mais onde?
    document.querySelector(".schedule-item").appendChild(field)
}
