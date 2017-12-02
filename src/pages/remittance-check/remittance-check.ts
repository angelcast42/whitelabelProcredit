import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RemittanceCheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-remittance-check',
  templateUrl: 'remittance-check.html',
})
export class RemittanceCheckPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goTo(page: string){
    this.navCtrl.push(page)
  }

}
