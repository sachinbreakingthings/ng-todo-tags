import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList = [
    { id: 0, title: 'Todo 1', tagName: 'fit in' },
    { id: 1, title: 'Todo 2', tagName: 'focus' },
    { id: 2, title: 'Todo 3', tagName: 'fit in' },
    { id: 3, title: 'Todo 4', tagName: 'goals' },
    { id: 4, title: 'Todo 5', tagName: 'goals' },
    { id: 5, title: 'Todo 6', tagName: 'focus' },
    { id: 6, title: 'Todo 7', tagName: 'fit in' },
    { id: 7, title: 'Todo 8', tagName: 'back burner' },
    { id: 8, title: 'Todo 9', tagName: 'focus' },
    { id: 9, title: 'Todo 10', tagName: 'back burner' },
  ];

  constructor() { }


  getTodos(tagName) {
    const filteredTodos = this.todoList.filter(todo => {
      return todo.tagName === tagName;
    });

    return filteredTodos;
  }

  createdTodo(todoTitle, tagName) {
    this.todoList.push({id: this.todoList.length + 1, title: todoTitle, tagName: tagName.name });
  }

  editTodo(todo) {
    const itemIndex = this.todoList.findIndex(item => item.id === todo.id);
    this.todoList[itemIndex] = todo;
  }

  deleteTodo(todo) {
    const itemIndex = this.todoList.findIndex(item => item.id === todo.id);
    this.todoList.splice(itemIndex, 1);
  }

}
