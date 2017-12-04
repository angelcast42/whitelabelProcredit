import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ThirdAccountsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-third-accounts',
  templateUrl: 'third-accounts.html',
})
export class ThirdAccountsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goTo(page: string){
    this.navCtrl.push(page)
  }
}
