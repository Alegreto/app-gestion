import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
//Importo el modelo desde donde voy a darlas de alta
import {TareaModelo} from '../../servicios/TareaModelo';
import {ModalPage} from '../modal/modal';
import { ServiciotareaProvider } from '../../servicios/serviciotarea';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  [x: string]: any;

  //public tareas:TareaModelo[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public servicioTarea:ServiciotareaProvider) {

  }

  ionViewDidLoad() {
    // this.tareas = [
    //   new TareaModelo('Ir de compras'),
    //   new TareaModelo('Hacer deporte', false, true),
    //   new TareaModelo('Estudiar', true),
    //   new TareaModelo('Curso de formación'),
    //   new TareaModelo('Limpieza', true)
    // ]
  }

  nuevaTarea(){
    const modal = this.modalCtrl.create(ModalPage);
    modal.present();
    //Al cerrar la modal se comprueba si hay datos
    //onDidDismiss detecta si se han poasado datos
    modal.onDidDismiss(tarea =>{
      if(tarea){
        //Si hay datos llama a la función que añade la tarea al array de objetos
        //Usamos el this ya que llamamos a una función desde la misma clase.
        this.anyadeTarea(tarea);
      }
    })
  }

  estilos(tarea:TareaModelo){
    let estilos = {
      'font-weight': tarea.importante ?'600': 'none',
      'text-decoration': tarea.realizado ? 'line-throught': 'none'
    }
    return estilos;
  }

  //Está función llamará al servicio
  anyadeTarea(tarea:TareaModelo){
    this.servicioTarea.addTarea(tarea);
    this.servicioTarea.salvarLocal();
  }

  borraTarea(tarea:TareaModelo){
    this.servicioTarea.borrado(tarea);
    this.servicioTarea.salvarLocal();
  }

  actualizaTarea(tarea:TareaModelo){
    //Me creo la modal pero le paso la tarea que quiero actualizar
    const modal = this.modalCtrl.create(ModalPage, {tarea:tarea});
    //console.log(tarea);
    modal.present();
    modal.onDidDismiss(tarea=>{
      if(tarea){
        this.servicioTarea.salvarLocal();
      }
    });
  }

}
