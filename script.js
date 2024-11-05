function addItem() {
	let input = document.getElementById("new-todo");
	let text = input.value;
	console.log("input =" + input);
	if (text !== "") {
		let todo = document.createElement("li");
		todo.textContent = text;
		const list = document.getElementById("todo-list");
		const newItem = document.createElement("li");
		newItem.textContent = text;
		list.appendChild(newItem);
	}
	input.value = "";
}

function onLoad() {
	console.log("Page and all resources have loaded!");
	document.getElementById("add-todo").addEventListener("click", addItem);
}

onLoad();
