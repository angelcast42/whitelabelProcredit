export interface TransferModel {
  $key?: string;
  sendTo: string;// account id of who receives the money
  sendFrom: string;// account id of who sends the money
  sendBy: string;// id of who sends the money
  receiveBy: string;// id of who receives the money
  amount: number;// amount sended
  currency: string;// currency of transaction

  created?: string | Object;
  modified?: string | Object;
  status: string;// status of transfer
}
export class Transfer implements TransferModel {
  $key?: string;
  sendTo: string;
  sendFrom: string;
  sendBy: string;
  receiveBy: string; 
  amount: number;
  currency: string;

  created?: string | Object;
  modified?: string | Object;
  status: string;
}