import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tasks: string[] = [];
  newTask: string = '';

  constructor() {}

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask.trim());
      this.newTask = ''; // Clear the input field after adding
    }
  }

  removeTask(task: string) {
    this.tasks = this.tasks.filter(t => t !== task);
  }
}
