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

function msgsMae(mae) {
	switch (mae) {
		case "suzy":
			msgs.innerHTML += `<div class="container-msg-mae"><img src="${img}"><p class="msg-mae">Oi ${nome}, aqui é a suzy</p></div>`;

			setTimeout(function () {
				msgs.innerHTML += `<div class="container-msg-mae"><img src="${img}"><p class="msg-mae">Você quer me encontrar?</p></div>`;
			}, 10000);

			setTimeout(function () {
				msgs.innerHTML += `<div class="container-msg-mae"><img src="${img}"><p class="msg-mae">${nome}, estou a 2km de distancia</p></div>`;
			}, 15000);

			setTimeout(function () {
				msgs.innerHTML += `<div class="container-msg-mae"><img src="${img}"><p class="msg-mae">Eu te amo!! 💘😍😘💋</p></div>`;
			}, 25000);

			setTimeout(function () {
				msgs.innerHTML += `<p>suse saiu do chat e foi te encontrar...👁</p>`;
			}, 35000);
			break;

		case "michele":
			msgs.innerHTML += `<div class="container-msg-mae"><img src="${img}"><p class="msg-mae">Oiiiee ${nome}!!!! Ai como eu amo vcc 💞💓💞</p></div>`;

			setTimeout(function () {
				msgs.innerHTML += `<div class="container-msg-mae"><img src="${img}"><p class="msg-mae">Vc quer vir me ver fazer meu programa (de computador)?</p></div>`;
			}, 10000);

			setTimeout(function () {
				msgs.innerHTML += `<div class="container-msg-mae"><img src="${img}"><p class="msg-mae">${nome}, <a href="https://www.downgratis.com/programas/" target="_blank">Entre nesse link</a></p></div>`;
			}, 15000);

			setTimeout(function () {
				msgs.innerHTML += `<div class="container-msg-mae"><img src="${img}"><p class="msg-mae">ti amo 💋</p></div>`;
			}, 25000);

			setTimeout(function () {
				msgs.innerHTML += `<p>mimi foi fazer mais programas... (de computador)</p>`;
			}, 35000);
			break;

		case "dani":
			msgs.innerHTML += `<div class="container-msg-mae"><img src="${img}"><p class="msg-mae">Oi ${nome}, eu sou a dani totosa</p></div>`;

			setTimeout(function () {
				msgs.innerHTML += `<div class="container-msg-mae"><img src="${img}"><p class="msg-mae">Eu sei que vc me ama, mas eu me amo mais que voce me ama</p></div>`;
			}, 10000);

			setTimeout(function () {
				msgs.innerHTML += `<div class="container-msg-mae"><img src="${img}"><p class="msg-mae">Mas ${nome}, vc conhece a dani?</p></div>`;
			}, 15000);

			setTimeout(function () {
				msgs.innerHTML += `<div class="container-msg-mae"><img src="${img}"><p class="msg-mae">A danificada... q eu dei... bem la...</p></div>`;
			}, 25000);

			setTimeout(function () {
				msgs.innerHTML += `<p>Dani cansou de voce e foi em bora</p>`;
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
	} else {
		return;
	}
}
