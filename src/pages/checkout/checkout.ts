import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

  //private todo : FormGroup;
  private formBuilder : FormBuilder;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  todo = {}

  logForm() {
    console.log(this.todo)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

}
