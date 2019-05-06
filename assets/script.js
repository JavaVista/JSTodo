const model = {
    todos: [],
    displayTodos() {
        this.todos.length === 0 ? console.log('List is empty') : console.log('My todos list:');
        this.todos.forEach((todoContent, index) => {
            console.log(index, todoContent.todo)
        });
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
    },
    toggleCompleted(index) {
        const todo = this.todos[index];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
};

// test
model.displayTodos();
model.addTodo('item 1');
model.addTodo('item 2');
model.deleteTodo(0);
model.deleteTodo(0);
