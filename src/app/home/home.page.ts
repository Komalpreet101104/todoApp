import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tasks: { task: string, priority: string, done: boolean }[] = [];
  newTask: string = '';
  newPriority: string = 'medium'; // Default priority

  constructor() {}

  // Add a new task
  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ task: this.newTask.trim(), priority: this.newPriority, done: false });

      // Clear input fields
      this.newTask = '';
      this.newPriority = 'medium';
    }
  }

  // Remove a task
  removeTask(task: { task: string, priority: string, done: boolean }) {
    this.tasks = this.tasks.filter(t => t !== task);
  }

  // Toggle task done state
  toggleTask(task: { task: string, priority: string, done: boolean }) {
    task.done = !task.done;
  }
}
