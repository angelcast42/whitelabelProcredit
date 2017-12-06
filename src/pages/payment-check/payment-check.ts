import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    public navParams: NavParams
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
    if (params === {}) {
      this.navCtrl.push(page)
    } else {
      this.navCtrl.push(page, params)
    }
  }
}
