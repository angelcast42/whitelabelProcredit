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
  name
  bank
  type
  number
  thirdaccount:Thirdaccount
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authProvider: AuthProvider,
    private thirdAccountProvider: ThirdaccountProvider
  ) {
    this.thirdaccount=this.thirdAccountProvider.newThirdAccount()
  }
  create(){
    this.thirdaccount.title = this.name
    this.thirdaccount.owner = this.authProvider.currentUserId()
    this.thirdaccount.currency = 'C$'
    this.thirdaccount.bank = this.bank
    this.thirdaccount.type = this.type
    this.thirdaccount.number = this.number
    this.thirdaccount.status='active'
    this.thirdAccountProvider.create(this.thirdaccount)
    this.authProvider.presentToast('La cuenta fue creada exitosamente.')
    this.goTo('DashboardPage')
  }
  goTo(page: string){
    this.navCtrl.setRoot(page)
  }

}
