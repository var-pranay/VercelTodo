import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../models/todos.type';
import { StorageServiceService } from '../services/storage-service.service';
import { retry } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';



@Component({
  selector: 'app-samil',
  imports: [MatSnackBarModule],
  templateUrl: './samil.component.html',
  styleUrl: './samil.component.css'
})
export class SamilComponent implements OnInit {
  constructor(private storageService: StorageServiceService,private matsnack: MatSnackBar){}
  service = inject(TodosService)
  taskCount = signal(0);
  taskInput: string = '';
  tasks: string[] = [];
  isDarkMode: boolean = false;

  
  ngOnInit(): void {
    // this.taskCount.set(this.service.TodosFromApiCall().length);
    this.taskCount.set(this.storageService.getArray().length);
    console.log(this.service.TodosFromApiCall().length);
  }
  
  showToast(message: string, action: string = 'Close') {
    this.matsnack.open(message, action, {
      duration: 3000, // 3 seconds
    });
  }

  addTask(textBoxValue: HTMLInputElement): void {
    if (!textBoxValue.value) {
      this.showToast('enter task');
      return;
    }
    const todovalue  = {
      title: textBoxValue.value,
      completed: false,
      userId : 1
    };
   let outPut = this.storageService.itemAdd(todovalue);
   this.showToast(outPut);
   this.taskCount.set(this.storageService.getArray().length);
   textBoxValue.value = '';
  }

  deleteTask(task: string): void {
    this.tasks = this.tasks.filter(t => t !== task);
  }
  
}
