import { Component } from '@angular/core';

@Component({
  selector: 'app-samil',
  imports: [],
  templateUrl: './samil.component.html',
  styleUrl: './samil.component.css'
})
export class SamilComponent {
  taskInput: string = ''; // For input field binding
  tasks: string[] = [];  // Array to hold tasks
  // Method to add a task to the list
  addTask(): void {
    if (this.taskInput.trim() !== '') {
      this.tasks.push(this.taskInput.trim());
      this.taskInput = ''; // Clear input field
    }
  }

  deleteTask(task: string): void {
    this.tasks = this.tasks.filter(t => t !== task);
  }
}
