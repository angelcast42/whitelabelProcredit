export interface PaymentModel {
  $key?: string;
  payTo: string;// account id of who receives the money
  payFrom: string;// account id of who sends the money
  payBy: string;// id of who sends the money
  amount: string;// amount sended
  currency: string;// currency of transaction
  type: string;// type of transaction

  created?: string | Object;
  modified?: string | Object;
  status: string;// status of transfer
}
export class Payment implements PaymentModel {
  $key?: string;
  payTo: string;
  payFrom: string;
  payBy: string;
  amount: string;
  currency: string;
  type: string;

  created?: string | Object;
  modified?: string | Object;
  status: string;
}