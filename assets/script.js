const model = {
    todos: [],
    displayTodos() {
       console.log('Hey my todos list:');
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
model.addTodo('test1');
model.addTodo('test2');
model.toggleCompleted(0);
