function createElementOnHTML(
	tag,
	innerText = "",
	classification = "",
	id = ""
) {
	const element = document.createElement(tag);
	element.innerText = innerText;
	if (classification) element.classList.add(classification);
	if (id) element.id = id;

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

function addNote(title, content) {
	const notesContainer = document.getElementById("container-notes");
	const divNote = createElementOnHTML("div", "", "note");
	const divNoteTitle = createElementOnHTML("div", "", "note-title");
	const divNoteContent = createElementOnHTML("div", "", "note-content");
	const h4Title = createElementOnHTML("h4", title);
	const pContent = createElementOnHTML("p", content);
	const divActionButtons = createElementOnHTML("div", "", "action-buttons");
	const buttonEdit = createElementOnHTML("button", "✏️", "edit");
	const buttonDelete = createElementOnHTML("button", "❌", "delete");

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

	formNewNote.style.display = "flex";
	noteTitle.focus();

	const buttonCreateNote = document.getElementById("button-create-note");
	buttonCreateNote.addEventListener("click", (e) => {
		e.preventDefault();
		if (checkIfExistsContent(noteTitle.value, noteContent.value)) {
			addNote(noteTitle.value, noteContent.value);
			noteTitle.value = "";
			noteContent.value = "";
			formNewNote.style.display = "none";
			return;
		}
	});
}
