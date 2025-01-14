import { Injectable } from '@angular/core';
import { Todo } from '../models/todos.type';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {
  private localStorageKey = 'todos';
  constructor() { }

  getArray = (): Todo[] => {
    const data = localStorage.getItem(this.localStorageKey);
    return data? JSON.parse(data):[];
  }

  saveArray = (todo: Todo[]): void => {
    localStorage.setItem(this.localStorageKey,JSON.stringify(todo));
  }

  itemAdd = (todoVal): string => {
    const newArr = this.getArray();

    const lastObject = newArr.reduce((prev, current) => {
      return prev.id > current.id ? prev : current;
    }, { id: 0 }); 

    const newId = lastObject.id + 1;
    const newObject:Todo = { id: newId,... todoVal};

    // Add to the array
    newArr.push(newObject);

    // Save the updated array back to local storage
    this.saveArray(newArr);
    return 'task added...';
  }
}
