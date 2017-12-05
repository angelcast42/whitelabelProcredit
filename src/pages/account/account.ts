import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  account
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.account = this.navParams.data.account
    console.log("cuenta",this.account)
  }
  goTo(page: string, params: any = {}){
    if (params === {}) {
      this.navCtrl.push(page)
    } else {
      this.navCtrl.push(page, params)
    }
  }
}
