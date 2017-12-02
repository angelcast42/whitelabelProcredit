import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-transfers',
  templateUrl: 'transfers.html',
})
export class TransfersPage {
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }
  goTo(page: string){
    this.navCtrl.push(page)
  }
}