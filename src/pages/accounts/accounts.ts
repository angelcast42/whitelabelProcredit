import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountProvider } from '../../providers/account/account'
import { AuthProvider } from '../../providers/auth/auth'

@IonicPage()
@Component({
  selector: 'page-accounts',
  templateUrl: 'accounts.html',
})
export class AccountsPage {
accounts
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private authProvider: AuthProvider,    
    private accountProvider: AccountProvider) {
    this.accountProvider.getAccount(this.authProvider.currentUserId()).valueChanges().subscribe(accounts=>{
      this.accounts=accounts;
      console.log("cuentas",this.accounts)
    })
  }

  goTo(page: string){
    this.navCtrl.push(page)
  }

}
