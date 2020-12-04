import { Component } from '@angular/core';
import { DomSanitizer,SafeResourceUrl} from '@angular/platform-browser'

@Component({
  selector: 'app-conasa',
  templateUrl: './conasa.page.html',
  styleUrls: ['./conasa.page.scss'],
})
export class ConasaPage {
  pdfSRC:string

  constructor() { 
    this.pdfSRC = "assets/pdf/directorio.pdf"
  }


}
