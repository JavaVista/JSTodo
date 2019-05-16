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

const displayButton = document.getElementById('displayButton');
const toggleAllButton = document.getElementById('toggleAllButton');

displayButton.addEventListener('click', () => {
	model.displayTodos();
});
toggleAllButton.addEventListener('click', () => {
	model.toggleAll();
});
// test

model.addTodo('item 1');
model.addTodo('item 2');
model.addTodo('item 3');
// model.toggleCompleted(1);
// model.toggleCompleted(0);
// model.toggleAll();
// model.toggleAll();
