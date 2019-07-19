const model = {
	todos: [],
	addTodo(todo) {
		this.todos.push({
			todo: todo,
			completed: false,
		});
	},
	changeTodo(index, todo) {
		this.todos[index].todo = todo;
	},
	deleteTodo(index) {
		this.todos.splice(index, 1);
	},
	toggleCompleted(index) {
		const todo = this.todos[index];
		todo.completed = !todo.completed;
	},
	toggleAll() {
		const totalTodos = this.todos.length;
		let completedTodos = 0;
		// Get number of todos
		this.todos.forEach(todoContent => {
			todoContent.completed === true ? completedTodos++ : completedTodos;
		});
		// If everything is true then make false or otherwise
		this.todos.forEach(todoContent => {
			completedTodos === totalTodos ? todoContent.completed = false : todoContent.completed = true;
		});
	},
};

const controller = {
	addTodo() {
		const addTodoInput = document.getElementById('addTodoInput');
		model.addTodo(addTodoInput.value);
		addTodoInput.value = '';
		view.display();
	},
	changeTodo() {
		const changePosition = document.getElementById('changePosition');
		const changeText = document.getElementById('changeText');
		model.changeTodo(changePosition.valueAsNumber, changeText.value);
		changePosition.value = '';
		changeText.value = '';
		view.display();
	},
	delete(position) {
		model.deleteTodo(position);
		view.display();
	},
	toggleCompleted() {
		const toggleCompletedPosition = document.getElementById(
			'toggleCompletedPosition'
		);
		model.toggleCompleted(toggleCompletedPosition.valueAsNumber);
		toggleCompletedPosition.valueAsNumber = '';
		view.display();
	},
	toggleAll() {
		model.toggleAll();
		view.display();
	},
};

const view = {
	display() {
		const todosUl = document.querySelector('ul');
		todosUl.innerHTML = '';
		model.todos.forEach((todoItem, index) => {
			const todoLi = document.createElement('li');
			let todoWithCompletion = '';
			todoItem.completed === true
				? (todoWithCompletion = `(x) ${todoItem.todo}`)
				: (todoWithCompletion = `( ) ${todoItem.todo}`);
			todoLi.id = index;
			todoLi.textContent = todoWithCompletion;
			todoLi.appendChild(this.deleteButton());
			todosUl.appendChild(todoLi);
		});
	},
	deleteButton() {
		let buttonDelete = document.createElement('button');
		buttonDelete.textContent = 'Delete';
		buttonDelete.className = 'deleteButton';
		return buttonDelete;
	},
	setEventListener() {
		const todosUl = document.querySelector('ul');
		// Event delegation
		todosUl.addEventListener('click', e => {
			// Get element that was clicked
			const elementClicked = e.target;
			// Checked if element is a delete button
			if (elementClicked.className === 'deleteButton')
				controller.delete(parseInt(elementClicked.parentNode.id));
		});
	},
};
view.setEventListener();

// test

// model.addTodo('item 1');
// model.addTodo('item 2');
// model.addTodo('item 3');
// model.toggleCompleted(1);
// model.toggleCompleted(0);
// model.toggleAll();
// model.toggleAll();
