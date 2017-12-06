import { Injectable } from '@angular/core'
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable'
import * as firebase from 'firebase/app'

import { schema } from '../../app/app.constants'
import { Account } from '../../models/account/account'
import { Firebase } from '@ionic-native/firebase'
import { AccountModel } from '../../models/account/account'

@Injectable()
export class AccountProvider {

  itemsRef: AngularFireList<Account>
  itemRef:  AngularFireObject<Account>

  items: Observable<Account[]> //  list of objects
  item:  Observable<Account>   //   single object
  account: AccountModel
  constructor(private db: AngularFireDatabase,    private firebaseNative: Firebase  ) {
    this.itemsRef = db.list(`${schema.Accounts}`)
  }
  // Return an observable list with optional query
  // You will usually call this from OnInit in a component
  accounts(query?) {
    return this.itemsRef.snapshotChanges().map(arr => {
      return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
    })
  }
  // Return an observable account
  getAccount(number) {
    return this.db.list(schema.Accounts, ref => ref.orderByChild('number').equalTo(number))
    
  }

  getAccounts(owner: string) {
    return this.db.list(schema.Accounts, ref => ref.orderByChild('owner').equalTo(owner))
  }
  // Create new account
  create(item: Account): void {
    this.firebaseNative.getToken()
    .then(token=>{
      console.log("tokencf",token)
      item.tokencf=token
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
      let n9=Math.floor(Math.random() * 9) + 1 ;  
      let n10=Math.floor(Math.random() * 9) + 1 ;      
      let code=n1.toString()+n2.toString()+n3.toString()+n4.toString()+n5.toString()+n6.toString()+n7.toString()+n8.toString()+n9.toString()+n10.toString()
      item.number=code;
      this.itemsRef.push(item)
    });

  }
  // Update an account
  update(key: string, value: any): void {
    this.itemsRef.update(key, value)
  }
  // Delete account
  delete(key: string): void {
    this.itemsRef.remove(key)
  }
  // Default error handling for all actions
  private handleError(error) {
    console.log(error)
  }
  newAccount(){
    this.reset()
    return this.account
  }
  reset(){
    this.account={
      balance:0,
      currency: 'C$',
      owner: '',
      status: 'active',
      title:'',
      token:'',
      tokencf:'',
      created: '',
      modified: '',
      type: 'monetaria',
      number: ''
    }
      }
}