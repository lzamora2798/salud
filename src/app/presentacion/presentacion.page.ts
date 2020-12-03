import { Component, OnInit } from '@angular/core';

import { DomSanitizer,SafeResourceUrl} from '@angular/platform-browser'
@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.page.html',
  styleUrls: ['./presentacion.page.scss'],
})
export class PresentacionPage {

  vidUrl:SafeResourceUrl;
  constructor(private domSatizer :DomSanitizer) { 
    // cuando cambie hay que ponerle 
    this.vidUrl = this.domSatizer.bypassSecurityTrustResourceUrl("http://conasa.dnet.ec/admin/archivos/conasa/_sections/presentacion.pdf");
    console.log(this.vidUrl)
  }

}


