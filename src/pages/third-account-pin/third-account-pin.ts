import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ThirdAccountPinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-third-account-pin',
  templateUrl: 'third-account-pin.html',
})
export class ThirdAccountPinPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goTo(page: string){
    this.navCtrl.setRoot(page)
  }
}
