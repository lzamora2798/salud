import { Component, OnInit } from '@angular/core';

import { DomSanitizer,SafeResourceUrl} from '@angular/platform-browser'
@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.page.html',
  styleUrls: ['./presentacion.page.scss'],
})
export class PresentacionPage {

  
  vidUrl:SafeResourceUrl;
  constructor(private domSatizer :DomSanitizer) { }

  ngOnInit() {
    this.vidUrl = this.domSatizer.bypassSecurityTrustResourceUrl("assets/pdf/presentacion.pdf");
  }


}


