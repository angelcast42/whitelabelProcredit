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
    this.accountProvider.getAccounts(this.authProvider.currentUserId()).snapshotChanges().subscribe(accounts=>{
      this.accounts=[];
      accounts.forEach(eachAccount => {
        let account:any;
        account = eachAccount
          this.accounts.push(account)
      })      
    })
  }
  goTo(page: string, params: any = {}){
    if (params === {}) {
      this.navCtrl.push(page)
    } else {
      this.navCtrl.push(page, params)
    }
  }
}
