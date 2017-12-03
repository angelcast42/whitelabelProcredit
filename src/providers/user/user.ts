import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http'

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: Http) {
    console.log('Hello UserProvider Provider');
  }
  sendMessage(areaCode,phoneNumber){
    let n1=Math.floor(Math.random() * 9) + 1 ; 
    let n2=Math.floor(Math.random() * 9) + 1 ; 
    let n3=Math.floor(Math.random() * 9) + 1 ; 
    let n4=Math.floor(Math.random() * 9) + 1 ; 
    let code=n1.toString()+n2.toString()+n3.toString()+n4.toString();
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    let item={
      code: code,
      phone: areaCode+phoneNumber
    };

    this.http.post('https://us-central1-fristaging.cloudfunctions.net/sendMessageBPC',JSON.stringify(item),{headers:headers})
    .map(res=>res)
    .subscribe(data=>{
      console.log(data);
    });
    return code;
  }
}
