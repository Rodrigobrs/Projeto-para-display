const ListaSeleçãoCarros = document.querySelectorAll(".carro");
ListaSeleçãoCarros.forEach(carro => { carro.addEventListener("click", () => {
    const CartaoCarroAberto = document.querySelector(".aberto");
    CartaoCarroAberto.classList.remove("aberto");

    const IdCarroSelecionado = carro.attributes.id.value;
    const IddoCartaoCarroParaabrir = "cartao-" + IdCarroSelecionado;
    const CartaoCarroParaabrir = document.getElementById(IddoCartaoCarroParaabrir);
    CartaoCarroParaabrir.classList.add("aberto");
    
    const CarroAtivoNaListagem = document.querySelector(".ativo");
    CarroAtivoNaListagem.classList.remove("ativo");
    
    const CarroSeleionadoNaListagem = document.getElementById(IdCarroSelecionado);
    CarroSeleionadoNaListagem.classList.add("ativo");
    })
})