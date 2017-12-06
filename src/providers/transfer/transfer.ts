import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransferModel } from '../../models/transfer/transfer'
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database'
import * as firebase from 'firebase/app'
import { Observable } from 'rxjs/Observable'
import { schema } from '../../app/app.constants'

/*
  Generated class for the TransferProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TransferProvider {
  transfer:TransferModel
  itemsRef: AngularFireList<Account>
  
  constructor(private db: AngularFireDatabase,public http: HttpClient) {
    console.log('Hello TransferProvider Provider');
    this.itemsRef = db.list(`${schema.Accounts}`)
    
  }
  newTransfer(){
    this.reset()
    return this.transfer
  }
  create(item,transaction){
    item.created=firebase.database.ServerValue.TIMESTAMP
    item.modified=firebase.database.ServerValue.TIMESTAMP
    firebase.database().ref('accounts/'+transaction.accountFrom.key).on('value',snapshot=>{
      firebase.database().ref('accounts/'+transaction.accountFrom.key).child('balance').set(snapshot.val().balance-item.amount)
    })
    this.itemsRef.push(item)
  }
  reset(){
    this.transfer={
      sendTo: '',
      sendFrom: '',
      sendBy: '',
      receiveBy: '',
      amount: 0,
      currency: 'C$',
      created: '',
      modified: '',
      status: 'accepted'
    }
  }
}
