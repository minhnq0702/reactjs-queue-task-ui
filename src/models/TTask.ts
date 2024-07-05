export interface ITask {
  _id: string;
  state: string;
  model: string;
  func: string;
  createdAt: Date;
  updatedAt: Date;
}
