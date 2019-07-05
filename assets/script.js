const model = {
	todos: [],
	displayTodos() {
		this.todos.length === 0
			? console.log('List is empty')
			: console.log('My todos list:');
		this.todos.forEach((todoContent, index) => {
			// check if todo is completed
			todoContent.completed
				? console.log(`(X) ${todoContent.todo}`)
				: console.log(`( ) ${todoContent.todo}`);
		});
	},
	addTodo(todo) {
		this.todos.push({
			todo: todo,
			completed: false,
		});
		this.displayTodos();
	},
	changeTodo(index, todo) {
		this.todos[index].todo = todo;
		this.displayTodos();
	},
	deleteTodo(index) {
		this.todos.splice(index, 1);
		this.displayTodos();
	},
	toggleCompleted(index) {
		const todo = this.todos[index];
		todo.completed = !todo.completed;
		this.displayTodos();
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
		this.displayTodos();
	},
};

const controller = {
	display() {
		model.displayTodos();
	},
	addTodo() {
		const addTodoInput = document.getElementById('addTodoInput');
		model.addTodo(addTodoInput.value);
		addTodoInput.value = '';
	},
	changeTodo() {
		const changePosition = document.getElementById('changePosition');
		const changeText = document.getElementById('changeText');
		model.changeTodo(changePosition.valueAsNumber, changeText.value);
		changePosition.value = '';
		changeText.valueAsNumber = '';
	},
	delete() {
		const deletePosition = document.getElementById('deletePosition');
		model.deleteTodo(deletePosition.valueAsNumber);
		deletePosition.valueAsNumber = '';
	},
	toggleCompleted() {
		const toggleCompletedPosition = document.getElementById(
			'toggleCompletedPosition'
		);
		model.toggleCompleted(toggleCompletedPosition.valueAsNumber);
		toggleCompletedPosition.valueAsNumber = '';
	},
	toggleAll() {
		model.toggleAll();
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
			todosUl.appendChild(todoLi);
		});
	},
};

// test

// model.addTodo('item 1');
// model.addTodo('item 2');
// model.addTodo('item 3');
// model.toggleCompleted(1);
// model.toggleCompleted(0);
// model.toggleAll();
// model.toggleAll();
