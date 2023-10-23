const buttonCopyCss = document.getElementById("copy-css");

function copyText(text) {
	navigator.clipboard.writeText(text);
	const temp = buttonCopyCss.innerText;
	buttonCopyCss.innerText = "✅ Copiado";
	setTimeout(() => {
		buttonCopyCss.innerText = temp;
	}, 2000);
}

function load() {
	const topLeft = document.getElementById("top-l");
	const topRight = document.getElementById("top-r");
	const bottomLeft = document.getElementById("bottom-l");
	const bottomRight = document.getElementById("bottom-r");
	const box = document.getElementById("box");
	const cssPreview = document.getElementById("css-preview");

	function updateBorderRadius() {
		const tl = topLeft.value;
		const tr = topRight.value;
		const bl = bottomLeft.value;
		const br = bottomRight.value;
		box.style.borderRadius = `${tl}% ${tr}% ${br}% ${bl}%`;

		cssPreview.innerText = `border-radius: ${tl}% ${tr}% ${br}% ${bl}%;`;
	}

	buttonCopyCss.addEventListener("click", () => copyText(cssPreview.innerText));

	updateBorderRadius();
	topLeft.addEventListener("input", updateBorderRadius);
	topRight.addEventListener("input", updateBorderRadius);
	bottomLeft.addEventListener("input", updateBorderRadius);
	bottomRight.addEventListener("input", updateBorderRadius);
}

document.addEventListener("DOMContentLoaded", () => load());
