import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth'
import { ThirdaccountProvider } from '../../providers/thirdaccount/thirdaccount'
import { Thirdaccount } from '../../models/thirdaccount/thirdaccount'

@IonicPage()
@Component({
  selector: 'page-third-account-add',
  templateUrl: 'third-account-add.html',
})
export class ThirdAccountAddPage {
  name: string
  bank: string
  type: string
  number: string
  thirdaccount:Thirdaccount
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authProvider: AuthProvider,
    private thirdAccountProvider: ThirdaccountProvider
  ) {
    this.thirdaccount=this.thirdAccountProvider.newThirdAccount()
  }
  verify(){
    this.thirdaccount.title = this.name
    this.thirdaccount.owner = this.authProvider.currentUserId()
    this.thirdaccount.currency = 'C$'
    this.thirdaccount.bank = this.bank
    this.thirdaccount.type = this.type
    this.thirdaccount.number = this.number
    this.thirdaccount.status='active'
    this.goTo('ThirdAccountPinPage', {thirdaccount: this.thirdaccount})
  }
  goTo(page: string, params: any = {}){
    if (params === {}) {
      this.navCtrl.push(page)
    } else {
      this.navCtrl.push(page, params)
    }
  }
}

