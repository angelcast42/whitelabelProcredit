import { Injectable } from '@angular/core'
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable'

import { schema } from '../../app/app.constants'
import { Account } from '../../models/account/account'

@Injectable()
export class AccountProvider {

  itemsRef: AngularFireList<Account>
  itemRef:  AngularFireObject<Account>

  items: Observable<Account[]> //  list of objects
  item:  Observable<Account>   //   single object

  constructor(private db: AngularFireDatabase) {
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
  get(key: string): Observable<Account> {
    const itemPath = schema.Accounts+'/'+key
    //this.item = this.db.object(itemPath).valueChanges()
    return this.item
  }
  // Create new account
  create(item: Account): void {
    this.itemsRef.push(item)
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
}