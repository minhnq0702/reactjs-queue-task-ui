export interface IUser {
  _id: string;
  account: string | null;
  email: string;
  role: string[] | null;
}
