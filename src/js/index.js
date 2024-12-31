const listaSeleçãoCarros = document.querySelectorAll(".carro");
listaSeleçãoCarros.forEach(carro => { carro.addEventListener("click", () => {
    const cartaoCarroAberto = document.querySelector(".aberto");
    cartaoCarroAberto.classList.remove("aberto");

    const idCarroSelecionado = carro.attributes.id.value;
    const idDoCartaoCarroParaAbrir = "cartao-" + idCarroSelecionado;
    const cartaoCarroParaAbrir = document.getElementById(idDoCartaoCarroParaAbrir);
    cartaoCarroParaAbrir.classList.add("aberto");
    
    const carroAtivoNaListagem = document.querySelector(".ativo");
    carroAtivoNaListagem.classList.remove("ativo");
    
    const carroSeleionadoNaListagem = document.getElementById(idCarroSelecionado);
    carroSeleionadoNaListagem.classList.add("ativo");
    })
})