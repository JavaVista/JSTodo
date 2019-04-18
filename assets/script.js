const model = {
    todos: [],
    displayTodos() {
        console.log('Hey', this.todos);
    },
    addTodo(todo) {
        this.todos.push({
            todo: todo,
            completed: false
        });
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

model.addTodo('test2');
