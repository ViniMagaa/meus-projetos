function createElementOnHTML(
	tag,
	innerText = "",
	classification = "",
	id = "",
	bgcolor = ""
) {
	const element = document.createElement(tag);
	element.innerText = innerText;
	if (classification) element.classList.add(classification);
	if (id) element.id = id;
	if (bgcolor) element.style.backgroundColor = bgcolor;

	return element;
}

function editNote(title, content, btnEdit) {
	if (btnEdit.innerText === "✏️") {
		title.contentEditable = true;
		content.contentEditable = true;
		btnEdit.innerText = "✅";
		title.focus();
	} else {
		title.contentEditable = false;
		content.contentEditable = false;
		btnEdit.innerText = "✏️";
	}
}

function deleteNote(button) {
	const note = button.closest(".note");
	note.remove();
}

function addNote(title, content, color) {
	const lightColor = `var(--light-${color})`;
	const mediumColor = `var(--medium-${color})`;

	const notesContainer = document.getElementById("container-notes");
	const divNote = createElementOnHTML("div", "", "note");
	const divNoteTitle = createElementOnHTML("div", "", "note-title", "", mediumColor);
	const divNoteContent = createElementOnHTML("div", "", "note-content", "", lightColor);
	const h4Title = createElementOnHTML("h4", title);
	const pContent = createElementOnHTML("p", content);
	const divActionButtons = createElementOnHTML("div", "", "action-buttons");
	const buttonEdit = createElementOnHTML(
		"button",
		"✏️",
		"edit",
		"",
		mediumColor
	);
	const buttonDelete = createElementOnHTML(
		"button",
		"❌",
		"delete",
		"",
		mediumColor
	);

	buttonEdit.onclick = () => editNote(h4Title, pContent, buttonEdit);
	buttonDelete.onclick = () => deleteNote(buttonDelete);

	divNoteTitle.appendChild(h4Title);
	divActionButtons.appendChild(buttonEdit);
	divActionButtons.appendChild(buttonDelete);
	divNoteContent.appendChild(pContent);
	divNoteContent.appendChild(divActionButtons);
	divNote.appendChild(divNoteTitle);
	divNote.appendChild(divNoteContent);

	notesContainer.appendChild(divNote);
}

function checkIfExistsContent(title, content) {
	const errorTitle = document.getElementById("title-error-container");
	const errorContent = document.getElementById("content-error-container");
	errorTitle.style.display = "none";
	errorContent.style.display = "none";

	if (title !== "" && content !== "") {
		return true;
	}
	if (title === "") {
		errorTitle.style.display = "block";
		if (content === "") {
			errorContent.style.display = "block";
		}
		return false;
	} else if (content === "") {
		errorContent.style.display = "block";
		return false;
	}
}

function createNote() {
	const formNewNote = document.getElementById("create-new-note");
	const errorTitle = document.getElementById("title-error-container");
	const errorContent = document.getElementById("content-error-container");
	const noteTitle = document.getElementById("title");
	const noteContent = document.getElementById("content");
	
	errorTitle.style.display = "none";
	errorContent.style.display = "none";
	noteTitle.value = "";
	noteContent.value = "";
	
	formNewNote.style.display = "flex";
	noteTitle.focus();
	
	const buttonCreateNote = document.getElementById("button-create-note");
	buttonCreateNote.addEventListener("click", (e) => {
		e.preventDefault();
		const color = document.querySelector("input[name=color]:checked").value;
		if (checkIfExistsContent(noteTitle.value, noteContent.value)) {
			addNote(noteTitle.value, noteContent.value, color);
			noteTitle.value = "";
			noteContent.value = "";
			formNewNote.style.display = "none";
			return;
		}
	});
}

function closeForm() {
	const formNewNote = document.getElementById("create-new-note");

	formNewNote.style.display = 'none'
}

/* MENU */
function toggleMenu() {
	const menu = document.getElementById("menu");
	menu.classList.toggle("active");
}

const menuHamburger = document.getElementById("menu-hamburger");
console.log(menuHamburger);
menuHamburger.addEventListener("click", toggleMenu);

function copyURL() {
	const url= "https://vinimagaa.github.io/meus-projetos/html-css-js/notas/" 
	navigator.clipboard
		.writeText(url)
		.then(() => {
			alert("Link copiado!");
		})
		.catch(() => {
			alert("Algo deu errado");
		});;
}