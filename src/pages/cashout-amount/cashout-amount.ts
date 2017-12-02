import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cashout-amount',
  templateUrl: 'cashout-amount.html',
})
export class CashoutAmountPage {

  amount: number = 0;
  inputAmount: string = '0';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }

  goTo(page: string){
    this.navCtrl.push(page)
  }
}