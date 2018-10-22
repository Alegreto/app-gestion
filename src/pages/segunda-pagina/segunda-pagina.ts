import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

/**
 * Generated class for the SegundaPaginaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-segunda-pagina',
  templateUrl: 'segunda-pagina.html',
})
export class SegundaPaginaPage {

  tareas:Array<any> = [
    {
      titulo:"compras",
      color: "blue",
      logo: "bug"
    },
    {
      titulo:"hospital",
      color: "orange",
      logo: "heart"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegundaPaginaPage');
  }

  presentModal() {
    const modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }

}
