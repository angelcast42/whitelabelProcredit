import { Injectable } from '@angular/core'
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable'
import * as firebase from 'firebase/app'

import { schema } from '../../app/app.constants'
import { Firebase } from '@ionic-native/firebase'
import { Service } from '../../models/service/service'

@Injectable()
export class ServiceProvider {
  itemsRef: AngularFireList<Service>
  itemRef:  AngularFireObject<Service>
  items: Observable<Service[]> //  list of objects
  item:  Observable<Service>   //   single object
  service: Service

  constructor(
    private db: AngularFireDatabase,
    private firebaseNative: Firebase
  ) {
    this.itemsRef = db.list(`${schema.Services}`)
  }
  services(query?) {
    return this.itemsRef.snapshotChanges().map(arr => {
      return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
    })
  }
  getServices() {
    return this.db.list(schema.Services)
  }
  getService(key: string): Observable<Service> {
    const itemPath = schema.Services+'/'+key
    //this.item = this.db.object(itemPath).valueChanges()
    return this.item
  }
  // Create new third account
  create(item: Service): void {
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
  newService(){
    this.reset()
    return this.service
  }
  reset(){
    this.service={
      title:'',
      logo:'',
      currency: 'C$',
      token: '',
      type: 'servicio',
      created: '',
      modified: '',
      status: 'active'
    }
  }
}