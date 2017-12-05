export interface ThirdaccountModel {
  $key?: string;
  title: string;
  owner: string;
  currency: string; 
  bank: string;
  type: string;
  number: string;
  iban: string;
  swift: string;

  created?: string | Object;
  modified?: string | Object;
  status: string;
}
export class Thirdaccount implements ThirdaccountModel {
  $key?: string;
  title: string;
  owner: string;
  currency: string; 
  bank: string;
  type: string;
  number: string;
  iban: string;
  swift: string;

  created?: string | Object;
  modified?: string | Object;
  status: string;
}