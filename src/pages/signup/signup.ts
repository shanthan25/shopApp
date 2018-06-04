import { Component } from '@angular/core';
import {  NavController, ToastController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { AuthService } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  responseData : any;
  userData = {"username": "","password": "", "name": "","email": ""};

  constructor(public navCtrl: NavController, public authService:AuthService, public toastCtrl: ToastController ) {
  }

  signup(){
    if(this.userData.username &&           this.userData.password && this.userData.email && this.userData.name) {


      this.authService.postData(this.userData,'register').then((result) => {
        this.responseData = result;
        if(this.responseData.useerData){
          localStorage.setItem('userData', JSON.stringify(this.responseData));
          this.navCtrl.push(TabsPage);
        }
        else {
          this. presentToast("Give valid details");
        }
      }, (err) => {
          // Error log
        });

    }
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  login(){
    //Login page link
    this.navCtrl.push(LoginPage);
  }
}
