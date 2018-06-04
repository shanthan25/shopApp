import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckoutPage } from '../../pages/checkout/checkout';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
  postList = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,private remoteService : RemoteServiceProvider) {
    this.getPosts();
  }

  getPosts(){
    this.remoteService.getPosts().subscribe((data)=>{
      this.postList = data;
    });
  }

  checkOut() {
    this.navCtrl.setRoot(CheckoutPage);
  }

  logEvent(event) {
    console.log(event)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

}
