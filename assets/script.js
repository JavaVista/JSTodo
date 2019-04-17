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
    }
};

model.changeTodo(1, 'testOut2');
