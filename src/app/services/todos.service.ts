import { inject, Injectable, Signal } from '@angular/core';
import {Todo} from '../models/todos.type'
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoitems : Array<Todo> = [
  // {
  //   id: 1,
  //   title: 'learnAngular',
  //   completed: true,
  //   userId: 1
  // },
  // {
  //   id: 2,
  //   title: 'SqlQuestion',
  //   completed: false,
  //   userId: 1
  // },
  // {
  //   id: 3,
  //   title: 'DSA BinarySearch',
  //   completed: false,
  //   userId: 1
  // }
]
  http = inject(HttpClient)
  TodosFromApiCall = (): Todo[]=>{
    // const url = `https://jsonplaceholder.typicode.com/todos`;
    // return this.http.get<Array<Todo>>(url)
    return this.todoitems;
  }
//#region not required
//   todosites : Array<Todo> = [{
//     title: 'greoceries',
//     id: 0,
//     userId: 1,
//     completed: false
//   },
//   {
//     title: 'study',
//     id: 1,
//     userId: 1,
//     completed: false
//   }
// ];
//#endregion
  constructor() { }
}
