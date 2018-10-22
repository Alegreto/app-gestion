import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SegundaPaginaPage } from './segunda-pagina';

@NgModule({
  declarations: [
    SegundaPaginaPage,
  ],
  imports: [
    IonicPageModule.forChild(SegundaPaginaPage),
  ],
})
export class SegundaPaginaPageModule {}
