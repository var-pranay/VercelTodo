import { Component, input, Input, output } from '@angular/core';
import { Todo } from '../models/todos.type';
import { HighlightCompleteTodoDirective } from '../directive/highlight-complete-todo.directive';

@Component({
  selector: 'app-todos-items',
  imports: [HighlightCompleteTodoDirective],
  templateUrl: './todos-items.component.html',
  styleUrl: './todos-items.component.css'
})
export class TodosItemsComponent {
  todo = input.required<Todo>();
  trigerTodo = output<Todo>();
  vardeleteTodo = output<Todo>();

  EventTriggerTodo = ()=>{
    this.trigerTodo.emit(this.todo());
  }
  deleteTodo(): void {
    this.vardeleteTodo.emit(this.todo());
}
}
