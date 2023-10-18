function createElementOnHTML(
	tag,
	innerText = "",
	classification = "",
	id = "",
	color = ""
) {
	const element = document.createElement(tag);
	element.innerText = innerText;
	if (classification) element.classList.add(classification);
	if (id) element.id = id;
	if (color) element.style.backgroundColor = color;

	return element;
}

function editNote(title, content, btnEdit, color, noteId) {
	if (btnEdit.innerText === "✏️") {
		title.contentEditable = true;
		content.contentEditable = true;
		btnEdit.innerText = "✅";
		title.focus();
	} else {
		title.contentEditable = false;
		content.contentEditable = false;
		btnEdit.innerText = "✏️";

		// Update note on local storage
		const note = {
			id: noteId,
			title: title.innerText,
			content: content.innerText,
			color: color,
		};
		const newNote = JSON.stringify(note);

		return localStorage.setItem(`note-${noteId}`, newNote);
	}
}

function deleteNote(noteId) {
	localStorage.removeItem(`note-${noteId}`);
	loadNotesFromLocalStorage();
	return;
}

let noteId = localStorage.getItem("noteId") || 0;

function addNote(title, content, color, idNote) {
	const lightColor = `var(--light-${color})`;
	const mediumColor = `var(--medium-${color})`;
	
	const divNotesContainer = document.getElementById("container-notes");
	const firstNote = divNotesContainer.querySelector(".note");
	const divNote = createElementOnHTML("div", "", "note");
	const divNoteTitle = createElementOnHTML(
		"div",
		"",
		"note-title",
		"",
		mediumColor
	);
	const divNoteContent = createElementOnHTML(
		"div",
		"",
		"note-content",
		"",
		lightColor
	);
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

	divNoteTitle.appendChild(h4Title);
	divActionButtons.appendChild(buttonEdit);
	divActionButtons.appendChild(buttonDelete);
	divNoteContent.appendChild(pContent);
	divNoteContent.appendChild(divActionButtons);
	divNote.appendChild(divNoteTitle);
	divNote.appendChild(divNoteContent);

	buttonEdit.onclick = () =>
		editNote(h4Title, pContent, buttonEdit, color, idNote);
	buttonDelete.onclick = () => deleteNote(idNote);

	return divNotesContainer.insertBefore(divNote, firstNote);;
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
			// Incrementar o contador para obter um ID único para a nova nota
			noteId++;
			localStorage.setItem("noteId", noteId);

			// Add to local storage
			const note = {
				id: noteId,
				title: noteTitle.value,
				content: noteContent.value,
				color: color,
			};
			localStorage.setItem(`note-${note.id}`, JSON.stringify(note));

			addNote(noteTitle, noteContent, color, note.id);

			noteTitle.value = "";
			noteContent.value = "";
			formNewNote.style.display = "none";

			loadNotesFromLocalStorage();
			return;
		}
	});
}

function closeForm() {
	const formNewNote = document.getElementById("create-new-note");

	formNewNote.style.display = "none";
}

function loadNotesFromLocalStorage() {
	const divNoNotes = document.getElementById("no-notes");
	const divNotesContainer = document.getElementById("container-notes");

	divNotesContainer.innerHTML = "";

	if (localStorage.length > 1) {
		divNoNotes.style.display = "none";
		for (let i = 0; i <= localStorage.length; i++) {
			const key = localStorage.key(i);

			if (key && key.startsWith("note-")) {
				const noteJSON = localStorage.getItem(key);
				if (noteJSON) {
					const note = JSON.parse(noteJSON);
					addNote(note.title, note.content, note.color, note.id);
				}
			}
		}
	} else {
		divNoNotes.style.display = "block";
	}
}

// MENU
function toggleMenu() {
	const menu = document.getElementById("menu");
	menu.classList.toggle("active");
}

const menuHamburger = document.getElementById("menu-hamburger");
menuHamburger.addEventListener("click", toggleMenu);

// COMPARTILHAR
function copyURL() {
	const url = "https://vinimagaa.github.io/meus-projetos/html-css-js/notas/";
	navigator.clipboard
		.writeText(url)
		.then(() => {
			alert("Link copiado!");
		})
		.catch(() => {
			alert("Algo deu errado");
		});
}

loadNotesFromLocalStorage();
