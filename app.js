function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor digitado no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    console.log(campoPesquisa);

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome do ator ou algo relaciona a ele</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = ""; 
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // Verifica se o título do dado contém o termo pesquisado
        if (titulo.includes(campoPesquisa)  || descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)) {
            // Se o título ou a descrição contém o termo, adiciona um novo item de resultado ao HTML
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p> <a href="${dado.link}" target="_blank">Mais informações</a> </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado. Você precisa digitar o nome do ator ou algo relaciona a ele.</p>"
    }

    // Atualiza o conteúdo HTML da seção com os resultados
    section.innerHTML = resultados;
}




