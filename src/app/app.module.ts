import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import {PrimeraPaginaPage} from '../pages/primera-pagina/primera-pagina';
import {SegundaPaginaPage} from '../pages/segunda-pagina/segunda-pagina';
import {ModalPage} from '../pages/modal/modal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { ServiciotareaProvider } from '../servicios/serviciotarea';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Calendar } from '@ionic-native/calendar';

export const firebaseConfig = {
  apiKey: "AIzaSyC_avaOpDfwnqZfsHnlpKlOcUk37MAAQ8s",
    authDomain: "prueba-ionic-1539798495296.firebaseapp.com",
    databaseURL: "https://prueba-ionic-1539798495296.firebaseio.com",
    projectId: "prueba-ionic-1539798495296",
    storageBucket: "prueba-ionic-1539798495296.appspot.com",
    messagingSenderId: "757522048974"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    TabsPage,
    PrimeraPaginaPage,
    SegundaPaginaPage,
    ModalPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    PrimeraPaginaPage,
    SegundaPaginaPage,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Geolocation,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiciotareaProvider,
    Calendar
  ]
})
export class AppModule {}
