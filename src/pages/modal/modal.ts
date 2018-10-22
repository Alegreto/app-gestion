import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TareaModelo } from '../../servicios/TareaModelo';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  public tarea = new TareaModelo('');
  public titulo:string = "Nueva tarea";
  public boton:string = "Añade Tarea";

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    //En el constructor de la modal si viene el parámetro tarea vamos a guardarla
    //Además si ya hay una tarea cambiaremos los valores del título y del botón.
    if(this.navParams.get('tarea')){
      this.tarea = this.navParams.get('tarea');
      this.titulo = "Actualiza tarea";
      this.boton = "Modifica";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  cierraModal(){
    this.viewCtrl.dismiss();
  }

  enviar(){
    this.viewCtrl.dismiss(this.tarea);
  }

}
