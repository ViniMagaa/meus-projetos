let dados = {};

function exibirProdutos(produtos) {
	let secaoProdutos = document.getElementById("produtos");

	for (let index = 0; index < produtos.length; index++) {
		secaoProdutos.innerHTML += `
    <div class='card-container'><a href="${produtos[index].permalink}" target="_blank">
      <img src="${produtos[index].thumbnail.replace(
				/\w\.jpg/gi,
				"W.jpeg"
			)}" alt="produto" class="image">
      <div class="card-infos">
        <h3 class="price">${produtos[index].price.toLocaleString("pt-br", {
					style: "currency",
					currency: "BRL",
				})}</h3>
        <h3 class="title">${produtos[index].title}</h3>
      </div>
    </a></div>`;
	}
}

function loadPage() {
	fetch("https://api.mercadolibre.com/sites/MLB/search?q=iphone")
		.then((resp) => resp.json())
		.then((data) => {
			dados = data;
			console.log(dados.results);
			exibirProdutos(dados.results);
		})
		.catch((err) => console.log(err));
}
