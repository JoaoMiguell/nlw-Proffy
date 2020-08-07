// Procurar o botao
document.querySelector("#add-time")
//quando clicar no botao
.addEventListener("click", clonefield)


// Executar uma ação
function clonefield() {
    //duplicar os campos
    //mais que campos??
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    // limpar os campos
    const fields = newFieldContainer.querySelectorAll("input")
    //que campos?
    fields.forEach(function(field) {
        //pegar o field do momento
        field.value = ""
    })

    //colocar na pagina
    //mais onde?
    document.querySelector("#schedule-item").appendChild(newFieldContainer)
}


