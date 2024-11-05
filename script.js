function addItem() {
	let input = document.getElementById("new-todo");
	let text = input.value;
	const list = document.getElementById("todo-list");

	if (text !== "") {
		const newItem = document.createElement("li");
		newItem.classList.add(
			"border",
			"border-secondary",
			"rounded-3",
			"p-2",
			"m-1"
		);
		newItem.textContent = text;
		list.appendChild(newItem);
		input.value = ""; // Clear the input after adding the item
	}
}

function removeItem(e) {
	if (e.target.matches(".rounded-3")) {
		e.target.remove();
	}
}

function onLoad() {
	console.log("Page and all resources have loaded!");
	document.getElementById("add-todo").addEventListener("click", addItem);
	document.getElementById("todo-list").addEventListener("click", removeItem); // Add event listener once
}

onLoad();
