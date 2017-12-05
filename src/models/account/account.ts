export interface AccountModel {
  $key?: string;
  title: string;
  owner: string;
  currency: string; 
  balance: number;
  token: string;
  tokencf: string;  
  type: string;

  created?: string | Object;
  modified?: string | Object;
  status: string;
  number: string;
}
export class Account implements AccountModel {
  $key?: string;
  title: string;
  owner: string;
  currency: string; 
  balance: number;
  token: string;
  tokencf: string;
  type: string;

  created?: string | Object;
  modified?: string | Object;
  status: string;
  number:string;
}