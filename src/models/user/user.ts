export interface UserModel {
  uid?: string;
  displayname: string;
  firstname: string;
  lastname: string;
  gender: number;
  birthdate?: string | Object;
  picture: string;

  address: string;
  zone: string;
  locality: string;
  state: string;
  country: number;

  email?: string;
  fixedphone: string;
  mobilephone: string;
  fcm: string;

  registered: boolean;
  locked: boolean;
  errorlogin: number;

  created?: string | Object,
  modified?: string | Object,
  status: string;
}
export class User implements UserModel {
  uid?: string;
  displayname: string;
  firstname: string;
  lastname: string;
  gender: number;
  birthdate?: string | Object;
  picture: string;

  address: string;
  zone: string;
  locality: string;
  state: string;
  country: number;

  email?: string;
  fixedphone: string;
  mobilephone: string;
  fcm: string;

  registered: boolean;
  locked: boolean;
  errorlogin: number;

  created?: string | Object;
  modified?: string | Object;
  status: string;
}