import { Injectable } from '@angular/core'
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable'

import { schema } from '../../app/app.constants'
import { Thirdaccount } from '../../models/thirdaccount/thirdaccount'

@Injectable()
export class ThirdaccountProvider {
  thirdaccountsRef: AngularFireList<Thirdaccount>
  thirdaccountRef:  AngularFireObject<Thirdaccount>
  thirdaccounts: Observable<Thirdaccount[]> //  list of objects
  thirdaccount:  Observable<Thirdaccount>   //   single object

  constructor(private db: AngularFireDatabase) {
    this.thirdaccountsRef = db.list(schema.ThirdAccounts)
  }
  getThirdaccounts(uid) {
    return this.db.list(schema.ThirdAccounts, ref => ref.orderByChild('owner').equalTo(uid));
  }
  // Create new third account
  create(thirdaccount: Thirdaccount): void {
    this.thirdaccountsRef.push(thirdaccount)
  }
  // Update an third account
  update(key: string, value: any): void {
    this.thirdaccountsRef.update(key, value)
  }
  // Delete third account
  delete(key: string): void {
    this.thirdaccountsRef.remove(key)
  }  
}
