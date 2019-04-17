const model = {
    todos: ['test1', 'test2', 'test3'],
    displayTodos() {
        console.log('Hey', this.todos);
    },
    addTodo(todo) {
        this.todos.push(todo);
        this.displayTodos();
    }
};

model.addTodo('testOut');
