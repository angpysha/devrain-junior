export interface Task {
  id: number,
  name: string,
  description: string,
  date: Date,
  done: Boolean; 
}

export class AddTask {
  public name: string;
  public description: string;
  public date: Date;
  public done: Boolean; 
}
