import { Component, OnInit } from '@angular/core';
import { DomSanitizer,SafeResourceUrl} from '@angular/platform-browser'
@Component({
  selector: 'app-acuerdo',
  templateUrl: './acuerdo.page.html',
  styleUrls: ['./acuerdo.page.scss'],
})
export class AcuerdoPage  {



  pdfSRC : string
  constructor(private domSatizer :DomSanitizer) { 
    this.pdfSRC = "assets/pdf/acuerdo.pdf"
 
  }
}

