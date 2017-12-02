import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-transfer-check',
  templateUrl: 'transfer-check.html',
})
export class TransferCheckPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goTo(page: string){
    this.navCtrl.push(page)
  }
}
