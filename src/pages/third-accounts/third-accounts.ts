import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThirdaccountProvider } from '../../providers/thirdaccount/thirdaccount'
import { AuthProvider } from '../../providers/auth/auth'

@IonicPage()
@Component({
  selector: 'page-third-accounts',
  templateUrl: 'third-accounts.html',
})
export class ThirdAccountsPage {
  thirdaccounts
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authProvider: AuthProvider,    
    private thirdaccountProvider: ThirdaccountProvider) {
    this.thirdaccountProvider.getThirdaccounts(this.authProvider.currentUserId()).snapshotChanges().subscribe(thirdaccounts=>{
      this.thirdaccounts=[];
      thirdaccounts.forEach(eachThirdAccount => {
        let account:any;
        account = eachThirdAccount
          this.thirdaccounts.push(account)
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
