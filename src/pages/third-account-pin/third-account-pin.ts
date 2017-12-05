import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth'
import { ThirdaccountProvider } from '../../providers/thirdaccount/thirdaccount'
import { Thirdaccount } from '../../models/thirdaccount/thirdaccount'

@IonicPage()
@Component({
  selector: 'page-third-account-pin',
  templateUrl: 'third-account-pin.html',
})
export class ThirdAccountPinPage {
  thirdaccount
  pin
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authProvider: AuthProvider,
    private thirdAccountProvider: ThirdaccountProvider
  ) {
    this.thirdaccount = this.navParams.data.thirdaccount
    console.log('thirdaccount: ', this.navParams.data)
  }
  create() {
    //verify if pin is true
    this.thirdAccountProvider.create(this.thirdaccount)
    this.authProvider.presentToast('La cuenta ACH fue creada exitosamente.')
    this.goTo('ThirdAccountsPage')
  }
  goTo(page: string){
    this.navCtrl.setRoot(page)
  }
}
