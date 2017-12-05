import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-cashout-add',
  templateUrl: 'cashout-add.html',
})
export class CashoutAddPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    
  ) {
  }

  goTo(page: string){
    this.navCtrl.push(page)
  }
}