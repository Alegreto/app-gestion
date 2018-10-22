import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
// import { PrimeraPaginaPage } from '../primera-pagina/primera-pagina';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  // mienlace = PrimeraPaginaPage;

  constructor() {

  }
}
