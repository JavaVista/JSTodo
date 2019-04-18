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
    changeTodo(index, todo) {
        this.todos[index].todo = todo;
        this.displayTodos();
    },
    deleteTodo(index) {
        this.todos.splice(index, 1);
        this.displayTodos();
    }
};

// test
model.addTodo('test4');
model.changeTodo(0, 'changed2');
