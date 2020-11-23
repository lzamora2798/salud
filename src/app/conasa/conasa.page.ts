import { Component } from '@angular/core';
import { DomSanitizer,SafeResourceUrl} from '@angular/platform-browser'

@Component({
  selector: 'app-conasa',
  templateUrl: './conasa.page.html',
  styleUrls: ['./conasa.page.scss'],
})
export class ConasaPage {

  vidUrl:SafeResourceUrl;
  constructor(private domSatizer :DomSanitizer) { 

    this.vidUrl = this.domSatizer.bypassSecurityTrustResourceUrl("http://conasa.dnet.ec/admin/archivos/conasa/_sections/directorio.pdf");
    console.log(this.vidUrl)
  }


}
