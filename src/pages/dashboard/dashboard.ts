import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountProvider } from '../../providers/account/account'
import { AuthProvider } from '../../providers/auth/auth'

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  balance
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private accountProvider: AccountProvider,
    private authProvider: AuthProvider
  ) {
    this.accountProvider.getAccounts(this.authProvider.currentUserId()).snapshotChanges().subscribe(accounts=>{
      this.balance = 0
      accounts.forEach(eachAccount => {
        this.balance = this.balance + eachAccount.payload.val().balance
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
  logOut(){
  this.authProvider.signOut()    
  }
}