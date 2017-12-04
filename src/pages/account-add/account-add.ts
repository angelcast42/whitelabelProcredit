import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-account-add',
  templateUrl: 'account-add.html',
})
export class AccountAddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goTo(page: string){
    this.navCtrl.setRoot(page)
  }

}
