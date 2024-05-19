const draggableItems = [...document.getElementsByClassName("drag")];

let startX, startY;

draggableItems.forEach((draggableItem) => {
	function handleDragStart(event) {
		draggableItem.style.position = "absolute";
		startX = event.clientX;
		startY = event.clientY;
	}

	function handleDragEnd(event) {
		const lastLeft = Number(draggableItem.style.left.replace("px", ""));
		const lastTop = Number(draggableItem.style.top.replace("px", ""));

		const newPositionX = event.clientX - startX + lastLeft;
		const newPositionY = event.clientY - startY + lastTop;

		draggableItem.style.left = `${newPositionX}px`;
		draggableItem.style.top = `${newPositionY}px`;
	}

	draggableItem.setAttribute("draggable", "true");
	draggableItem.addEventListener("dragstart", handleDragStart);
	draggableItem.addEventListener("dragend", (e) =>
		handleDragEnd(e, draggableItem)
	);
});

const drawableSpace = document.getElementById("draw-space")

drawableSpace.addEventListener("mousedown", () => {
  document.addEventListener("mousemove", (e) => {
    const div = document.createElement("div");
		div.classList.add("point");
		div.style.left =
			Number(
				e.pageX - drawableSpace.style.width.replace("px", "")
			).toString() + "px";
		div.style.top =
			Number(
				e.pageY - drawableSpace.style.height.replace("px", "")
			).toString() + "px";
		drawableSpace.append(div);
  })
});
