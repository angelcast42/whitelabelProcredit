import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SimProvider } from '../../providers/sim/sim'
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the PaymentCheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-check',
  templateUrl: 'payment-check.html',
})
export class PaymentCheckPage {
  service
  paymentQuery
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userProvider: UserProvider,              
    private simProvider: SimProvider
    
  ) {
    this.service = this.navParams.data.service
    let n1=Math.floor(Math.random() * 9) + 1 ; 
    let n2=Math.floor(Math.random() * 9) + 1 ; 
    let n3=Math.floor(Math.random() * 9) + 1 ;
    let amount=n1.toString()+n2.toString()+n3.toString()    
    this.paymentQuery = {
      amount: amount,
      currency: 'C$'
    }
  }
  goTo(page: string, params: any = {}){
    this.simProvider.getSim().then(info=>{
      if(info.countryCode==='gt'){
        this.userProvider.getUser().then(user=>{
          let code=this.userProvider.sendTransferMessage('+502',user.phone)
          this.navCtrl.push(page,{transfer:user,code:code})
        })
      }
      else{
        this.userProvider.getUser().then(user=>{
          let code=this.userProvider.sendPayMessage('+505',user.phone)
          this.navCtrl.push(page,{transfer:user,code:code})
        })
      }
    })
  }
}
