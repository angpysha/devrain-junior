import { Component, OnInit } from '@angular/core';
import { TaskService } from 'app/services/task.service';
import { Task, AddTask } from 'app/models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  tasks: Task[] = [];
  task: AddTask = new AddTask();
  title = 'app';
  createVisible = false;
  constructor(private _taskService: TaskService) {

  }

  ngOnInit() {
    this._taskService.getTasks()
      .subscribe((response) => {
        this.tasks = response;
        console.log(response);
      });
  }

  Add(model: Task) {
    this._taskService.Add(model)
      .subscribe((response) => {
        console.log(response);
        this.tasks.push(response);
        this.createVisible = !this.createVisible;
      });
  }

  Update(model: Task) {
    this._taskService.Update(model.id, model)
      .subscribe((response) => {
        console.log(response);
      });
  }

  Delete(model: Task) {
    this._taskService.Delete(model.id)
      .subscribe((response) => {
        console.log(response);
        this.tasks.splice(this.tasks.indexOf(model), 1);
      });
  } 

}
