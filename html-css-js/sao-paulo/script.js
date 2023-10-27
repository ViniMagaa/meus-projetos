let n = 0;
let isConversa = false;
let msgs = document.querySelector(".msgs");
let img = "http://placekitten.com/30/30";
let nome, nomeMae;

function chatMae(mae) {
	nome = document.querySelector("#nome").value;
	nomeMae = mae;
	let chat = document.querySelector(".chat");
	let inserirNome = document.querySelector(".colocar-nome");

	if (nome != "") {
		chat.style.display = "block";
		inserirNome.style.display = "none";
		isConversa = true;
		msgsMae(nomeMae);
	} else {
		alert("[ERRO] Digite seu nome!");
	}
}

function msgsMae(time) {
	switch (time) {
		case "sp":
			msgs.innerHTML += `<div class="container-msg-mae"><img src="${img}"><p class="msg-mae">Oi ${nome}, aqui é vai sao paulOoOoOoOoOoO!</p></div>`;

			setTimeout(function () {
				msgs.innerHTML += `<div class="container-msg-mae"><img src="${img}"><p class="msg-mae">meus torcedores sao todos gays e fazem parte do grupo LGBTAISDOJOQHOSDAKJHAJKSD+</p></div>`;
			}, 10000);

			setTimeout(function () {
				msgs.innerHTML += `<div class="container-msg-mae"><img src="${img}"><p class="msg-mae">${nome}, vc e meu time tem q morrer queimado na camara de gas, esquartejado, espancado e escravizado</p></div>`;
			}, 15000);

			setTimeout(function () {
				msgs.innerHTML += `<div class="container-msg-mae"><img src="${img}"><p class="msg-mae">Eu sou o pior time do brasil, palmeras é muito maismlehor e maior</p></div>`;
			}, 25000);

			setTimeout(function () {
				msgs.innerHTML += `<p>sao paulo foi perder mais jogos</p>`;
			}, 35000);
			break;
	}
}

function mandarMsg() {
	let msgs = document.querySelector(".msgs");
	let mensagem = document.querySelector("#mensagem-usu");
	if (mensagem.value != "") {
		msgs.innerHTML += `<div class="container-msg-usu">
			<p class="msg-usu">${mensagem.value}</p>
		</div>`;
		mensagem.value = "";
		mensagem.focus()
	} else {
		return;
	}
}
