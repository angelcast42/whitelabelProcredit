import { Injectable } from '@angular/core'
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable'
import * as firebase from 'firebase/app'

import { schema } from '../../app/app.constants'
import { Firebase } from '@ionic-native/firebase'
import { Payment } from '../../models/payment/payment'

@Injectable()
export class PaymentProvider {
  itemsRef: AngularFireList<Payment>
  itemRef:  AngularFireObject<Payment>
  items: Observable<Payment[]> //  list of objects
  item:  Observable<Payment>   //   single object
  payment: Payment

  constructor(
    private db: AngularFireDatabase,
    private firebaseNative: Firebase
  ) {
    this.itemsRef = db.list(`${schema.Payments}`)
  }
  payments(query?) {
    return this.itemsRef.snapshotChanges().map(arr => {
      return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
    })
  }
  getPayments(owner: string) {
    return this.db.list(schema.Payments, ref => ref.orderByChild('owner').equalTo(owner))
  }
  getPayment(key: string): Observable<Payment> {
    const itemPath = schema.Payments+'/'+key
    //this.item = this.db.object(itemPath).valueChanges()
    return this.item
  }
  // Create new third account
  create(item: Payment): void {
    item.created=firebase.database.ServerValue.TIMESTAMP
    item.modified=firebase.database.ServerValue.TIMESTAMP
    this.itemsRef.push(item)
  }
  // Update an third account
  update(key: string, value: any): void {
    this.itemsRef.update(key, value)
  }
  // Delete third account
  delete(key: string): void {
    this.itemsRef.remove(key)
  }  
  // Default error handling for all actions
  private handleError(error) {
    console.log(error)
  }
  newPayment(){
    this.reset()
    return this.payment
  }
  reset(){
    this.payment={
      payTo:'',
      payFrom:'',
      payBy: '',
      amount: '',
      currency: 'C$',
      type: 'pago',
      created: '',
      modified: '',
      status: 'active'
    }
  }
}