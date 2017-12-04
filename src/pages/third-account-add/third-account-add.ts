import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ThirdAccountAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-third-account-add',
  templateUrl: 'third-account-add.html',
})
export class ThirdAccountAddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goTo(page: string){
    this.navCtrl.push(page)
  }
}
