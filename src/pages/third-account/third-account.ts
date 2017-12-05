import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-third-account',
  templateUrl: 'third-account.html',
})
export class ThirdAccountPage {
  thirdaccount
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.thirdaccount = this.navParams.data.thirdaccount
    console.log("cuenta ACH: ",this.thirdaccount)    
  }
  goTo(page: string, params: any = {}){
    if (params === {}) {
      this.navCtrl.push(page)
    } else {
      this.navCtrl.push(page, params)
    }
  }
}
