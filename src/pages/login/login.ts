import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { HomePage } from '../home/home';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public user={
    email:'',
    pass:''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, 
    public autFire:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  acceso(){
    this.autFire.auth.signInWithEmailAndPassword(this.user.email, this.user.pass).then(()=>{
      //Al usar la función setRoot nos aseguramos que el usuario no pueda navegar hacia atrás
      this.navCtrl.setRoot(HomePage);
    }).catch(error =>{
      console.log(error);
      var errorMsg = error.message;
      document.getElementById("msg-container").innerHTML = errorMsg;
    })
  }

  registro(){
    this.autFire.auth.createUserWithEmailAndPassword(this.user.email, this.user.pass).then(()=>{
      console.log('Usuario dado de alta');
    }).catch(error =>{
      console.log(error.message);
      var errorMsg = error.message;
      document.getElementById("msg-container").innerHTML = errorMsg;
    })
  }

}
