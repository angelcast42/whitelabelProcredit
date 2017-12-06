import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountProvider } from '../../providers/account/account'
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-transfer-check',
  templateUrl: 'transfer-check.html',
})
export class TransferCheckPage {
transfer
  constructor(public navCtrl: NavController, 
    private accountProvider: AccountProvider ,
    public userProvider: UserProvider,          
    public navParams: NavParams) {
    this.transfer=navParams.data.transfer
    console.log('transfer ',this.transfer,
)
  }
  goTo(page: string){
    this.userProvider.getUser().then(user=>{
      let code=this.userProvider.sendTransferMessage('+502',user.phone)
      this.navCtrl.push(page,{transfer:this.transfer,code:code})
    })
  }
}
