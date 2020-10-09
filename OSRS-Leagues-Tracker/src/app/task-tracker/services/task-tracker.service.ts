import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskTrackerService {

  private selectedTasks = new BehaviorSubject<number[]>([]);
  sharedTasks = this.selectedTasks.asObservable();
  localStorageKey = 'SelectedTasks';

  constructor() {
      if(localStorage.getItem(this.localStorageKey) != null) {
        var tasks = JSON.parse(localStorage.getItem(this.localStorageKey))
        tasks.forEach(element => {
            this.addTask(element)
        });
      }
  }

  addTask(taskId: number) {
    var tasks = this.selectedTasks.getValue();
    tasks = tasks.filter(task => task != taskId);
    tasks.push(taskId);
    this.selectedTasks.next(tasks);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
  }

  removeTask(taskId: number) {
    var tasks = this.selectedTasks.getValue();
    tasks = tasks.filter(task => task != taskId);
    this.selectedTasks.next(tasks);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
  }
}