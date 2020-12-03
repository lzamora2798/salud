import { Component, OnInit } from '@angular/core';
import { DomSanitizer,SafeResourceUrl} from '@angular/platform-browser'
@Component({
  selector: 'app-acuerdo',
  templateUrl: './acuerdo.page.html',
  styleUrls: ['./acuerdo.page.scss'],
})
export class AcuerdoPage  {



 
  vidUrl:SafeResourceUrl;
  constructor(private domSatizer :DomSanitizer) { 

    this.vidUrl = this.domSatizer.bypassSecurityTrustResourceUrl("http://conasa.dnet.ec/admin/archivos/conasa/_sections/acuerdo.pdf");
    console.log(this.vidUrl)
  }
}

