export interface AccountModel {
  $key?: string;
  title: string;
  owner: string;
  currency: string; 
  balance: number;
  token: string;
  type: string;

  created?: string | Object;
  modified?: string | Object;
  status: string;
}
export class Account implements AccountModel {
  $key?: string;
  title: string;
  owner: string;
  currency: string; 
  balance: number;
  token: string;
  type: string;

  created?: string | Object;
  modified?: string | Object;
  status: string;
}