import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmation',
  templateUrl: 'confirmation.html',
})
export class ConfirmationPage {
transfer
transaction
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.transaction=navParams.data.transaction
    this.transfer=navParams.data.transfer
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmationPage');
  }
  goTo(page: string){
    this.navCtrl.setRoot(page)
  }

}
