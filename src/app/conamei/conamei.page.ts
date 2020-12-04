
import { Component } from '@angular/core';
import { DomSanitizer,SafeResourceUrl} from '@angular/platform-browser'
@Component({
  selector: 'app-conamei',
  templateUrl: './conamei.page.html',
  styleUrls: ['./conamei.page.scss'],
})


export class ConameiPage {

  pdfSRC:string;
  constructor(private domSatizer :DomSanitizer) { 
    this.pdfSRC = "assets/pdf/conamei.pdf"
  }


}

