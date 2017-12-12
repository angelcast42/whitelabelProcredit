import { Injectable } from '@angular/core'

import { AngularFireAuth } from 'angularfire2/auth'
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database'
import * as firebase from 'firebase/app'
import { Observable } from 'rxjs/Rx'

import { schema } from '../../app/app.constants'
import { User } from '../../models/user/user'
import { ToastController} from 'ionic-angular'
import { AccountProvider } from '../../providers/account/account'
import { AccountModel } from '../../models/account/account'

@Injectable()
export class AuthProvider {

  authState: any = null;
  userRef: AngularFireObject<any>
  account:AccountModel
  
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private toastCtrl: ToastController,
    private accountProvider: AccountProvider    
    
  ) {
    this.account=this.accountProvider.newAccount()
    
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });    
  }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null
  }

  // Returns auth
  get currentUserObservable(): any {
    return this.afAuth.authState
  }

  // Returns current user UID
  currentUserId() {
    return firebase.auth().currentUser.uid;
  }

  // Email Auth
  emailSignUp(detail) {
    console.log("detail",detail)
    return this.afAuth.auth.createUserWithEmailAndPassword(detail.email, detail.password)
      .then((user) => {
        this.authState = user
        this.account.balance=0;
        this.account.currency='C$'
        this.account.owner=this.currentUserId()
        this.account.status='active'
        this.account.title=detail.phone
        this.account.token=detail.token
        this.accountProvider.create(this.account)        
        this.updateUserData(detail)
      })
      .catch(error => console.log(error))
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
      })
      .catch(error => console.log(error))
  }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
    const fbAuth = firebase.auth();

    return fbAuth.sendPasswordResetEmail(email)
      .then(() => console.log('email sent'))
      .catch((error) => console.log(error))
  }

  // Sign Out
  signOut(): void {
    this.afAuth.auth.signOut()
    // add redirect to login page
  }

  // Helpers
  private updateUserData(detail): void {

    const data = {
      email: detail.email,
      name: detail.name,
      phone: detail.phone,
      token:detail.token
    }
    firebase.database().ref('users/').child(this.authState.uid).update(data)
  }
  auth(){
    return this.afAuth.authState;
  }
  presentToast(message:string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
    });
  
    toast.present();
  }
}
