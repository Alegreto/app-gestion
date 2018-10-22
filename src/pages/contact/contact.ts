import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//Importamos la cámara
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { Calendar } from '@ionic-native/calendar';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  //Creo una propiedad para acceder a la imagen.
  base64Image:any;
  muestraFoto:any;
  MyCalendar:any;


  //Añadimos la cámara al constructor
  constructor(private calendar: Calendar, public navCtrl: NavController, private camera: Camera, private geolocation: Geolocation) {
  }

  realizaFoto(){
    //Creo una función para incluir el código de uso de la cámara
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });

  }

  mostrarFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: false
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.muestraFoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  loadMap(){
    
  }

  dameLocalizacion(){
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log("Latitud: "+resp.coords.latitude);
      console.log("Longitud: "+resp.coords.longitude);
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
  }
  calendario(){
  this.calendar.createCalendar('MyCalendar').then(
    
    (msg) => { console.log(msg); },
    (err) => { console.log(err); }
  );
}
}
