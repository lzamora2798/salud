import { Component } from '@angular/core';
import { DomSanitizer,SafeResourceUrl} from '@angular/platform-browser'

@Component({
  selector: 'app-conasa',
  templateUrl: './conasa.page.html',
  styleUrls: ['./conasa.page.scss'],
})
export class ConasaPage {
  
  vidUrl:SafeResourceUrl;
  constructor(private domSatizer :DomSanitizer) { }

  ngOnInit() {
    this.vidUrl = this.domSatizer.bypassSecurityTrustResourceUrl("assets/pdf/directorio.pdf");
  }



}
