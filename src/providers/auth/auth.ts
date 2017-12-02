import { Injectable } from '@angular/core'

import { AngularFireAuth } from 'angularfire2/auth'
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database'
import * as firebase from 'firebase/app'
import { Observable } from 'rxjs/Rx'

import { schema } from '../../app/app.constants'
import { User } from '../../models/user/user'

@Injectable()
export class AuthProvider {

  authState: any = null;
  userRef: AngularFireObject<any>

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {
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
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : ''
  }

  // Email Auth
  emailSignUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
        this.updateUserData()
      })
      .catch(error => console.log(error))
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
        this.updateUserData()
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
  private updateUserData(): void {
    const path = `${schema.Users}/${this.currentUserId}` // Endpoint on firebase
    const userRef: AngularFireObject<any> = this.db.object(path)

    const data = {
      email: this.authState.email,
      displayname: this.authState.displayName
    }

    userRef.update(data)
      .catch(error => console.log(error))

  }
}
