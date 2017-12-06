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
  newTransfer(){
    this.reset()
    return this.transfer
  }
  create(item,transaction){
    item.created=firebase.database.ServerValue.TIMESTAMP
    item.modified=firebase.database.ServerValue.TIMESTAMP
    firebase.database().ref(schema.Accounts+'/'+transaction.accountFrom.key).once('value',snapshot=>{
      firebase.database().ref(schema.Accounts+'/'+transaction.accountFrom.key).child('balance').set(snapshot.val().balance-item.amount)
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
