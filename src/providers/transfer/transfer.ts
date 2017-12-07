import { Injectable } from '@angular/core'
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable'
import * as firebase from 'firebase/app'

import { schema } from '../../app/app.constants'
import { Transfer } from '../../models/transfer/transfer'

@Injectable()
export class TransferProvider {
  transfer:Transfer
  itemsRef: AngularFireList<Account>
  
  constructor(
    private db: AngularFireDatabase
  ) {
    console.log('Hello TransferProvider Provider');
    this.itemsRef = db.list(`${schema.Transfers}`)
    
  }
  getTransfers(uid) {
    return this.db.list(schema.Transfers, ref => ref.orderByChild('sendBy').equalTo(uid))
  }
  getTransfersAccount(account) {
    return this.db.list(schema.Transfers, ref => ref.orderByChild('sendFrom').equalTo(account))
  }
  newTransfer(){
    this.reset()
    return this.transfer
  }
  create(item,transaction,receiver){
    console.log("actualizado")
    item.created=firebase.database.ServerValue.TIMESTAMP
    item.modified=firebase.database.ServerValue.TIMESTAMP
    let n1=Math.floor(Math.random() * 9) + 1 ; 
    let n2=Math.floor(Math.random() * 9) + 1 ; 
    let n3=Math.floor(Math.random() * 9) + 1 ; 
    let n4=Math.floor(Math.random() * 9) + 1 ;
    let n5=Math.floor(Math.random() * 9) + 1 ; 
    let n6=Math.floor(Math.random() * 9) + 1 ; 
    let n7=Math.floor(Math.random() * 9) + 1 ; 
    let n8=Math.floor(Math.random() * 9) + 1 ; 
    let auth=n1.toString()+n2.toString()+n3.toString()+n4.toString()+n5.toString()+n6.toString()+n7.toString()+n8.toString()
    item.auth=auth
    firebase.database().ref(schema.Accounts+'/'+transaction.accountFrom.key).once('value',snapshot=>{
      firebase.database().ref(schema.Accounts+'/'+transaction.accountFrom.key).child('balance').set(snapshot.val().balance-item.amount)
    })
    if(receiver){
      firebase.database().ref(schema.Accounts+'/'+receiver).once('value',snapshot=>{
        console.log("balance",snapshot.val().balance)
        firebase.database().ref(schema.Accounts+'/'+receiver).child('balance').set(snapshot.val().balance+item.amount)
      })      
    }    
    this.itemsRef.push(item)
    return item
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
      auth: 0,
      status: 'accepted'
    }
  }
}
