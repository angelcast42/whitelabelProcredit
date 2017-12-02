import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cashout-check',
  templateUrl: 'cashout-check.html',
})
export class CashoutCheckPage {
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }
  goTo(page: string){
    this.navCtrl.push(page)
  }
}