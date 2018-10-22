import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {SegundaPaginaPage} from '../segunda-pagina/segunda-pagina'
import { ModalPage } from '../modal/modal';
//1. Importo modulo de autenticación de Angular Fire
import{AngularFireAuth} from '@angular/fire/auth';
import { PrimeraPaginaPage } from '../primera-pagina/primera-pagina';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //2. Declaro las variables que van a ser bindeadas desde el formulario de Login
  public user={
    email:'',
    pass:''
  };

  //3. Añado AngularFireAuth al constructor
  constructor(public navCtrl: NavController, 
    public modalCtrl: ModalController, 
    public autFire:AngularFireAuth) {

  }
  //4.Creo la función que permite el acceso llamada desde el formulario y le paso el email y el pass que está bindeado
  acceso(){
    this.autFire.auth.signInWithEmailAndPassword(this.user.email, this.user.pass).then(()=>{
      //Al usar la función setRoot nos aseguramos que el usuario no pueda navegar hacia atrás
      this.navCtrl.setRoot(PrimeraPaginaPage);
    }).catch(error =>{
      console.log(error);
    })
  }

  registro(){
    this.autFire.auth.createUserWithEmailAndPassword(this.user.email, this.user.pass).then(()=>{
      console.log('Usuario dado de alta');
    }).catch(error =>{
      console.log(error);
    })
  }
  
  primeraFuncion(){
    console.log('funciona');
    this.navCtrl.push(SegundaPaginaPage);
  }
s
  presentModal() {
    const modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }

}
