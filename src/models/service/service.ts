export interface ServiceModel {
  $key?: string;
  title: string;
  logo: string;
  currency: string; 
  balance: number;
  token: string;
  type: string;

  created?: string | Object;
  modified?: string | Object;
  status: string;
}
export class Service implements ServiceModel {
  $key?: string;
  title: string;
  logo: string;
  currency: string; 
  balance: number;
  token: string;
  type: string;

  created?: string | Object;
  modified?: string | Object;
  status: string;
}