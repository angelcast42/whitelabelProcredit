import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth'
import { AccountProvider } from '../../providers/account/account'
import { AccountModel } from '../../models/account/account'

@IonicPage()
@Component({
  selector: 'page-token',
  templateUrl: 'token.html',
})
export class TokenPage {
  user: any = {}
  account:AccountModel
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authProvider: AuthProvider,
    private accountProvider: AccountProvider    
    
  ) {
    this.user=navParams.data.user
    
  }
  goTo(page: string){

    this.authProvider.emailSignUp(this.user)
  }
}
