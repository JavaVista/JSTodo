const model = {
    todos: ['test1', 'test2', 'test3'],
    displayTodos() {
        console.log('Hey', this.todos);
    },
    addTodo(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo(index, value) {
        this.todos[index] = value;
        this.displayTodos();
    },
    deleteTodo(index) {
        this.todos.splice(index, 1);
        this.displayTodos();
    }
};

model.deleteTodo(1);
