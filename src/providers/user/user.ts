import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http'
import * as firebase from 'firebase/app'

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
  getUser():any{
    return new Promise( (resolve, reject) => {
      firebase.database().ref('users/'+firebase.auth().currentUser.uid).on('value',snapshot=>{
      resolve(snapshot.val())
    })
  });
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
  sendAccountMessage(areaCode,phoneNumber){
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

    this.http.post('https://us-central1-fristaging.cloudfunctions.net/sendMessageAch',JSON.stringify(item),{headers:headers})
    .map(res=>res)
    .subscribe(data=>{
      console.log(data);
    });
    return code;
  }
  
  sendPayMessage(areaCode,phoneNumber){
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

    this.http.post('https://us-central1-fristaging.cloudfunctions.net/sendMessagePay',JSON.stringify(item),{headers:headers})
    .map(res=>res)
    .subscribe(data=>{
      console.log(data);
    });
    return code;
  }
  sendTransferMessage(areaCode,phoneNumber){
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

    this.http.post('https://us-central1-fristaging.cloudfunctions.net/sendMessageTransfer',JSON.stringify(item),{headers:headers})
    .map(res=>res)
    .subscribe(data=>{
      console.log(data);
    });
    return code;
  }
  sendPush(token,title,message){
    console.log(token,title,message);
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    let item={
      token: token,
      title: title,
      message: message
    };

    this.http.post('https://us-central1-fri-whitelabel.cloudfunctions.net/sendPush',JSON.stringify(item),{headers:headers})
    .map(res=>res)
    .subscribe(data=>{
      console.log(data);
    });    
}
}
