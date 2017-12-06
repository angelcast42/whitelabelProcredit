import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Payment } from '../../models/payment/payment'
import { ServiceProvider } from '../../providers/service/service'

@IonicPage()
@Component({
  selector: 'page-payment-add',
  templateUrl: 'payment-add.html',
})
export class PaymentAddPage {
  services
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private serviceProvider: ServiceProvider
  ) {
    this.serviceProvider.getServices().snapshotChanges().subscribe(services=>{
      this.services=[];
      services.forEach(eachService => {
        let service:any;
        service = eachService
          this.services.push(service)
      })      
    })    
  }
  goTo(page: string, params: any = {}){
    if (params === {}) {
      this.navCtrl.push(page)
    } else {
      this.navCtrl.push(page, params)
    }
  }
}
