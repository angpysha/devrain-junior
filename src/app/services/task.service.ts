import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Task, AddTask } from 'app/models/task';

@Injectable()
export class TaskService {
  protected _http: Http;
  protected appUrl: string = "";

  constructor(http: Http/*, @Inject('BASE_URL') baseUrl: string*/) {
    this._http = http;
  }

  public getTasks() {
    return this._http.post(this.appUrl + 'api/task/all', null)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  public Add(model: Task) {
    return this._http.post(this.appUrl + 'api/task/add', model)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  public Update(id: number, model: Task) {
    return this._http.put(this.appUrl + 'api/task/update/' + id, model)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  public Delete(id: number) {
    return this._http.delete(this.appUrl + 'api/task/delete/' + id)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }   

}
