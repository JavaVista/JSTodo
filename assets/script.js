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
		// get number of todos
		this.todos.forEach(todoContent => {
			todoContent.completed === true ? completedTodos++ : completedTodos;
		});
		// If everything is true then make false and otherwise
		completedTodos === totalTodos
			? this.todos.forEach(todoContent => {
					todoContent.completed = false;
			  })
			: this.todos.forEach(todoContent => {
					todoContent.completed = true;
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
	delete() {
		const deletePosition = document.getElementById('deletePosition');
		model.deleteTodo(deletePosition.valueAsNumber);
		deletePosition.valueAsNumber = '';
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
		model.todos.forEach(todoItem => {
			const todoLi = document.createElement('li');
			let todoWithCompletion = '';
			todoItem.completed === true
				? (todoWithCompletion = `(x) ${todoItem.todo}`)
				: (todoWithCompletion = `( ) ${todoItem.todo}`);
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
	}
};

// test

// model.addTodo('item 1');
// model.addTodo('item 2');
// model.addTodo('item 3');
// model.toggleCompleted(1);
// model.toggleCompleted(0);
// model.toggleAll();
// model.toggleAll();

