export interface IMessage {
  _id: string;
  sender: string;
  receiver: string;
  content: string;
  failReason: string;
  state: string;
}
