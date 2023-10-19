let noteId = localStorage.getItem("noteId") || 0;

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

// Manipulating notes
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

	return divNotesContainer.insertBefore(divNote, firstNote);
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

	const containerColors = document.getElementById("id-note-color");

	containerColors.addEventListener("click", () => {
		const color = document.querySelector("input[name=color]:checked").value;
		const containerCreate = document.getElementById(
			"id-container-create-new-note"
		);
		const containerHeaderCreate = document.getElementById(
			"id-create-new-note-header"
		);
		const lightColor = `var(--light-${color})`;
		const mediumColor = `var(--medium-${color})`;

		containerCreate.style.backgroundColor = lightColor;
		containerHeaderCreate.style.backgroundColor = mediumColor;
	});

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

	return (formNewNote.style.display = "none");
}

function loadNotesFromLocalStorage() {
	const divNoNotes = document.getElementById("no-notes");
	const divNotesContainer = document.getElementById("container-notes");

	divNotesContainer.innerHTML = "";

	if (localStorage.length > 2) {
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
	return;
}

// Menu
function toggleMenu() {
	const menu = document.getElementById("menu");
	return menu.classList.toggle("active");
}

const menuHamburger = document.getElementById("menu-hamburger");
menuHamburger.addEventListener("click", toggleMenu);

// Share
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
	return;
}

// Switch color mode
const btnSwitcher = document.getElementById("btn-switch-mode");

const mode = localStorage.getItem("mode") || "white";

function darkMode() {
	localStorage.setItem("mode", "dark");
	btnSwitcher.innerText = "☀️";

	document.documentElement.style.setProperty("--bg-color", "#222");
	document.documentElement.style.setProperty("--header-color", "#444");
	document.documentElement.style.setProperty(
		"--span-color",
		"var(--light-blue)"
	);
	document.documentElement.style.setProperty(
		"--text-color",
		"var(--light-gray)"
	);
	document.documentElement.style.setProperty("--light-yellow", "#AB7D38");
	document.documentElement.style.setProperty("--medium-yellow", "#5E451F");
	document.documentElement.style.setProperty("--light-blue", "#383A7E");
	document.documentElement.style.setProperty("--medium-blue", "#272959");
	document.documentElement.style.setProperty("--light-pink", "#C84771");
	document.documentElement.style.setProperty("--medium-pink", "#62374E");
	document.documentElement.style.setProperty("--light-green", "#519872");
	document.documentElement.style.setProperty("--medium-green", "#3B5249");
	document.documentElement.style.setProperty("--light-gray", "#ccc");
	document.documentElement.style.setProperty("--dark-gray", "#444");
	document.documentElement.style.setProperty("--border", "3px solid #eee");
	document.documentElement.style.setProperty("--box-shadow", "3px 3px 0 #eee");
	document.documentElement.style.setProperty(
		"--box-shadow-hover",
		"7px 7px 0 #eee"
	);
	document.body.style.color = "#eee";
	return;
}

function whiteMode() {
	localStorage.setItem("mode", "white");
	btnSwitcher.innerText = "🌙";

	document.documentElement.style.setProperty("--bg-color", "#F9F3E5");
	document.documentElement.style.setProperty(
		"--header-color",
		"var(--medium-yellow)"
	);
	document.documentElement.style.setProperty(
		"--span-color",
		"var(--medium-blue)"
	);
	document.documentElement.style.setProperty(
		"--text-color",
		"var(--dark-gray)"
	);
	document.documentElement.style.setProperty("--light-yellow", "#F5D89A");
	document.documentElement.style.setProperty("--medium-yellow", "#ffd16f");
	document.documentElement.style.setProperty("--light-blue", "#9ABAF5");
	document.documentElement.style.setProperty("--medium-blue", "#5791fd");
	document.documentElement.style.setProperty("--light-pink", "#F59AC8");
	document.documentElement.style.setProperty("--medium-pink", "#ff79bc");
	document.documentElement.style.setProperty("--light-green", "#9AF59A");
	document.documentElement.style.setProperty("--medium-green", "#5de35d");
	document.documentElement.style.setProperty("--light-grey", "#A09886");
	document.documentElement.style.setProperty("--dark-gray", "#33322E");
	document.documentElement.style.setProperty(
		"--border",
		"3px solid var(--dark-gray)"
	);
	document.documentElement.style.setProperty(
		"--box-shadow",
		"3px 3px 0px var(--dark-gray)"
	);
	document.documentElement.style.setProperty(
		"--box-shadow-hover",
		"7px 7px 0px var(--dark-gray)"
	);
	document.body.style.color = "#111";
	return;
}

// Load color mode
if (mode == "white") {
	whiteMode();
} else {
	darkMode();
}

function switchColorMode() {
	if (localStorage.getItem("mode") == "white") {
		darkMode();
	} else {
		whiteMode();
	}
	return;
}

loadNotesFromLocalStorage();
