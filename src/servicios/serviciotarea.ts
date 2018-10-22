import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TareaModelo } from './TareaModelo';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
// import { AngularFireAuthModule } from '@angular/fire/auth';

/*
  Generated class for the ServiciotareaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiciotareaProvider {

  //Me creo un array de tareas vacío
  public tareas: TareaModelo[] = [];

  constructor(public http: HttpClient, private storage: Storage, /*public afd:AngularFireDatabase*/) {
    //Desde el constructor voy a llamar a una función
    this.dameLista();
  }
  
  //Coger lo que está almacenado
  public dameLista(){
    //Cuando el storage esté listo hacemos algo
    this.storage.ready().then(()=>{
      this.storage.get('tareas').then(data =>{
          //inicializo una variable local vacía sobre la que trabajar
          let tareaLocal:TareaModelo[]=[];
          if(data){
            for(let tarea of data){
              tareaLocal.push(new TareaModelo(tarea.descripcion, tarea.realizado, tarea.importante));
            }
          }
          this.tareas = tareaLocal;
      });
    });
  }

  public salvarLocal(){
    this.storage.ready().then(()=>{
      this.storage.set('tareas', this.tareas);
    });
  }
  public addTarea(tarea:TareaModelo){
    this.tareas.push(tarea);
    //this.afd.list('/tareas/').push(tarea);
  }

  public borrado(tarea:TareaModelo){
    let index = this.tareas.indexOf(tarea);
    this.tareas.splice(index, 1);
  }

  


}
