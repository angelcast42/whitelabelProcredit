import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterBlockPasswordConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-block-password-confirm',
  templateUrl: 'register-block-password-confirm.html',
})
export class RegisterBlockPasswordConfirmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goTo(page: string){
    this.navCtrl.setRoot(page)
  }

}
