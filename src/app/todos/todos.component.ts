import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { catchError, retry, single } from 'rxjs';
import { Todo } from '../models/todos.type';
import { TodosItemsComponent } from '../todos-items/todos-items.component';
import { StorageServiceService } from '../services/storage-service.service';

@Component({
  selector: 'app-todos',
  imports: [TodosItemsComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  constructor(private storage: StorageServiceService) {}
  todoservice = inject(TodosService);
  todoitems = signal<Array<Todo>>([]);
  ngOnInit(): void {
    const storedTodos = localStorage.getItem('todos');
  if (storedTodos) {
    // If there is data in localStorage, parse it and set it to the signal
    this.todoitems.set(JSON.parse(storedTodos));
  }else{
    this.todoitems.set(this.todoservice.TodosFromApiCall());
    localStorage.setItem('todos', JSON.stringify(this.todoservice.TodosFromApiCall()));
  }
    
    //this.todoservice.TodosFromApiCall()
    // .pipe(
    //   catchError((err)=>{
    //     console.log(err);
    //     throw err;
    //   })
    // )
    // .subscribe((val)=> console.log(this.todoitems.set(val)));
  }
  // UpateTriggerToDo = (todoitems1: Todo)=>{
  //   this.todoitems.update((todos)=>{
  //     const updatedTodos = todos.map((todo)=>{
  //       if (todo.id === todoitems1.id) {
  //         return{
  //          ... todo,
  //           completed:!todo.completed
  //         }
  //         //completed:!todo.completed
  //         //todo.completed = !todo.completed;
          
  //       }
  //       localStorage.setItem('todos', JSON.stringify(updatedTodos));
  //       return updatedTodos;
  //       //return todo;
  //     })
  //   })
  // }

  UpateTriggerToDo = (todoitems1: Todo) => {
    this.todoitems.update((todos) => {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === todoitems1.id) {
          return { ...todo, completed: !todo.completed }; // Toggle completed
        }
        return todo;
      });
  
      // Save the updated array to localStorage
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      console.log(JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  deleteObject(val: Todo): void {
    let array = this.storage.getArray();

    // Filter out the object with the matching `id`
    array = array.filter(item => item.id !== val.id);

    // Save the updated array back to local storage
    this.storage.saveArray(array);
    this.todoitems.set(this.storage.getArray());
  }
}
