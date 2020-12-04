import { Component, OnInit } from '@angular/core';

import { DomSanitizer,SafeResourceUrl} from '@angular/platform-browser'
@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.page.html',
  styleUrls: ['./presentacion.page.scss'],
})
export class PresentacionPage {

  vidUrl:SafeResourceUrl;
  pdfSRC:string
  constructor(private domSatizer :DomSanitizer) { 
    // cuando cambie hay que ponerle 
    this.pdfSRC = "assets/pdf/presentacion.pdf"
    
  }

}


