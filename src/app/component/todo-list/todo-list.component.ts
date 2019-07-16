import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnChanges {
  addModal = true;
  newtodoTitle = '';
  currentTodo;
  todoList;
  @Input() selectedTag;
  constructor(private _todoService: TodoService) { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.fetchTodos();
  }

  onDeleteTodo(todo) {
    this._todoService.deleteTodo(todo);
    this.fetchTodos();
  }

  fetchTodos() {
    this.todoList = this._todoService.getTodos(this.selectedTag.name);
  }

  onTodoCreation() {
    this.fetchTodos();
  }

  onTodoUpdation() {
    this.fetchTodos();
  }

  onAddTodo() {
    this.newtodoTitle = this.newtodoTitle.trim();
    if (this.newtodoTitle) {
      this._todoService.createdTodo(this.newtodoTitle, this.selectedTag);
      this.newtodoTitle = '';
    }
    this.fetchTodos();
  }

  onEditTodo(currentTodo) {
    this._todoService.editTodo(currentTodo);
    this.fetchTodos();
  }

  modalFlag(flag, currentTodo) {
    this.currentTodo = {...currentTodo};
    this.addModal = flag;
  }

}
