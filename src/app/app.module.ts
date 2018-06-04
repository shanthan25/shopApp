import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ContactPage } from '../pages/contact/contact';
import { ProductsPage } from '../pages/products/products';
import { CheckoutPage } from '../pages/checkout/checkout';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Welcome } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
/*//import { SignaturePadModule } from 'angular2-signaturepad';*/
import { HttpModule } from '@angular/http';
// import { AuthService } from '../providers/auth-service';
import { AuthService } from '../providers/auth-service/auth-service';
import { LinkyModule } from 'angular-linky';
import { MomentModule } from 'angular2-moment';
import { RemoteServiceProvider } from '../providers/remote-service/remote-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ContactPage,
    ProductsPage,
    CheckoutPage,
    Welcome,
    LoginPage,
    SignupPage,
  ],
  imports: [
    BrowserModule, HttpModule, LinkyModule, MomentModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ContactPage,
    ProductsPage,
    CheckoutPage,
    Welcome,
    LoginPage,
    SignupPage,
  ],
  providers: [
    StatusBar,
    SplashScreen, AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    RemoteServiceProvider
  ]
})
export class AppModule {}
