import { Injectable } from '@angular/core'
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable'
import * as firebase from 'firebase/app'

import { schema } from '../../app/app.constants'
import { Account } from '../../models/account/account'
import { Firebase } from '@ionic-native/firebase'
import { Thirdaccount } from '../../models/thirdaccount/thirdaccount'

@Injectable()
export class ThirdaccountProvider {
  itemsRef: AngularFireList<Thirdaccount>
  itemRef:  AngularFireObject<Thirdaccount>
  items: Observable<Thirdaccount[]> //  list of objects
  item:  Observable<Thirdaccount>   //   single object
  thirdaccount: Thirdaccount

  constructor(
    private db: AngularFireDatabase,
    private firebaseNative: Firebase
  ) {
    this.itemsRef = db.list(`${schema.ThirdAccounts}`)
  }
  thirdaccounts(query?) {
    return this.itemsRef.snapshotChanges().map(arr => {
      return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
    })
  }
  getThirdaccounts(uid) {
    return this.db.list(schema.ThirdAccounts, ref => ref.orderByChild('owner').equalTo(uid))
  }
  getThirdAccount(key: string): Observable<Thirdaccount> {
    const itemPath = schema.ThirdAccounts+'/'+key
    //this.item = this.db.object(itemPath).valueChanges()
    return this.item
  }
  // Create new third account
  create(item: Thirdaccount): void {
    item.created=firebase.database.ServerValue.TIMESTAMP
    item.modified=firebase.database.ServerValue.TIMESTAMP
    console.log('thirdaccount: ', item)
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
  newThirdAccount(){
    this.reset()
    return this.thirdaccount
  }
  reset(){
    this.thirdaccount={
      title:'',
      currency: 'C$',
      owner: '',
      bank:'',
      number: '',
      iban:'',
      swift:'',
      type: 'monetaria',
      created: '',
      modified: '',
      status: 'active'
    }
  }
}