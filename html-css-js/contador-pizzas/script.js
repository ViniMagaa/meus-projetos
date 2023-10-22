function createElementOnHTML(
	tag,
	innerText = "",
	className = "",
	className2 = ""
) {
	const element = document.createElement(tag);
	element.innerText = innerText;
	if (className) element.classList.add(className);
	if (className2) element.classList.add(className2);

	return element;
}

function createImgOnHTML(src, alt) {
	const img = document.createElement("img");
	img.src = src;
	img.alt = alt;

	return img;
}

function createInputOnHTML(type, name, className) {
	const input = document.createElement("input");
	input.type = type;
	input.name = name;
	input.classList.add(className);
	input.autocomplete = "false";

	return input;
}

function addPerson() {
	const sectionContainerPeople = document.getElementById("id-container-people");
	const divDescription = document.getElementById("description");
	if (divDescription) divDescription.remove();

	const divContainerPerson = createElementOnHTML(
		"div",
		"",
		"container-person",
		"display-flex-center"
	);

	const buttonMinus = createElementOnHTML("button", "", "minus");
	const imgMinus = createImgOnHTML("imgs/minus.svg", "-");

	const divNameAndValue = createElementOnHTML(
		"div",
		"",
		"name-and-value",
		"display-flex-center"
	);
	const inputPersonName = createInputOnHTML("text", "name", "person-name");
	const divNumberPizza = createElementOnHTML("div", "", "number-pizza");
	const pNumber = createElementOnHTML(
		"p",
		"0",
		"number",
		"display-flex-center"
	);

	const buttonPlus = createElementOnHTML("button", "", "plus");
	const imgPlus = createImgOnHTML("imgs/plus.svg", "+");

	// Add elements to container
	buttonMinus.appendChild(imgMinus);
	divContainerPerson.appendChild(buttonMinus);

	divNumberPizza.appendChild(pNumber);
	divNameAndValue.appendChild(inputPersonName);
	divNameAndValue.appendChild(divNumberPizza);
	divContainerPerson.appendChild(divNameAndValue);

	buttonPlus.appendChild(imgPlus);
	divContainerPerson.appendChild(buttonPlus);

	buttonMinus.onclick = () => subtraction(pNumber);
	buttonPlus.onclick = () => addition(pNumber);

	sectionContainerPeople.appendChild(divContainerPerson);
	inputPersonName.focus();
	return;
}

function addition(pNumber) {
	pNumber.innerText = parseInt(pNumber.innerText) + 1;
}

function subtraction(pNumber) {
	const number = parseInt(pNumber.innerText);
	if (number > 0) {
		pNumber.innerText = number - 1;
	}
}

function existsContent(list) {
	for (let i = 0; i < list.length; i++) {
		const listItem = list[i];
		if (listItem.value === "") return false;
	}
	return true;
}

function createScoreTable(list) {
	const divScore = document.getElementById("score");
	divScore.style.display = "block";

	const h2 = createElementOnHTML("h2", `Hoje ${list[0].name} deu prejuízo 🤣`);
	const table = document.createElement("table");
	const trHead = document.createElement("tr");
	trHead.appendChild(createElementOnHTML("th", "Posição"));
	trHead.appendChild(createElementOnHTML("th", "Nome"));
	trHead.appendChild(createElementOnHTML("th", "Fatias comidas"));
	table.appendChild(trHead);

	for (let i = 0; i < list.length; i++) {
		const tr = document.createElement("tr");
		tr.appendChild(createElementOnHTML("td", `${i + 1}º`));
		tr.appendChild(createElementOnHTML("td", list[i].name));
		tr.appendChild(createElementOnHTML("td", list[i].number));
		table.appendChild(tr);
	}
	divScore.appendChild(h2);
	divScore.appendChild(table);
	return;
}

function calculateScore() {
	const names = document.querySelectorAll("input.person-name");
	if (names.length > 0 && existsContent(names)) {
		const btn = document.getElementById("btn-calculate");
		btn.style.display = "none";

		const arrayNames = [];
		for (let i = 0; i < names.length; i++) {
			const name = names.item(i).value;
			const numbers = document.querySelectorAll(".number");
			const numberOfPizzas = parseInt(numbers[i].innerHTML);
			arrayNames.push({ number: numberOfPizzas, name: name });
		}
		// Ordenar a array com base nos números em ordem crescente
		arrayNames.sort((a, b) => b.number - a.number);
		createScoreTable(arrayNames);

		// Botão de refazer
		const btnReload = document.getElementById("btn-reload");
		btnReload.innerHTML = "";
		btnReload.appendChild(createImgOnHTML("imgs/reload.svg", "🔃"));
		btnReload.appendChild(createElementOnHTML("p", "Refazer"));
		btnReload.addEventListener("click", () => window.location.reload());
	} else {
		alert("Confira os dados e tente novamente");
	}
}
