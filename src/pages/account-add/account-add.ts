import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth'
import { AccountProvider } from '../../providers/account/account'
import { AccountModel } from '../../models/account/account'

@IonicPage()
@Component({
  selector: 'page-account-add',
  templateUrl: 'account-add.html',
})
export class AccountAddPage {
  name
  token
  account:AccountModel
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private authProvider: AuthProvider,
    private accountProvider: AccountProvider  ) {
      this.account=this.accountProvider.newAccount()
  }
  create(){
    this.account.balance=0;
    this.account.currency='C$'
    this.account.owner=this.authProvider.currentUserId()
    this.account.status='active'
    this.account.title=this.name
    this.account.token=this.token
    this.accountProvider.create(this.account)
    this.authProvider.presentToast('La cuenta fue creada exitosamente.')
    this.goTo('DashboardPage')
  }
  goTo(page: string){
    this.navCtrl.setRoot(page)
  }

}
