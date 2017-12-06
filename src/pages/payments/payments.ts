import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentProvider } from '../../providers/payment/payment'
import { AuthProvider } from '../../providers/auth/auth'
import { Payment } from '../../models/payment/payment';

@IonicPage()
@Component({
  selector: 'page-payments',
  templateUrl: 'payments.html',
})
export class PaymentsPage {
  payments
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authProvider: AuthProvider,
    private paymentProvider: PaymentProvider
  ) {
    this.paymentProvider.getPayments(this.authProvider.currentUserId()).snapshotChanges().subscribe(payments=>{
      this.payments=[];
      payments.forEach(eachPayment => {
        let payment:any;
        payment = eachPayment
          this.payments.push(payment)
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