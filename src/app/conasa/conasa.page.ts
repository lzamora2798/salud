import { Component, OnInit } from '@angular/core';
import { DomSanitizer,SafeResourceUrl} from '@angular/platform-browser'
@Component({
  selector: 'app-conasa',
  templateUrl: './conasa.page.html',
  styleUrls: ['./conasa.page.scss'],
})
export class ConasaPage implements OnInit {

  vidUrl:SafeResourceUrl;
  constructor(private domSatizer :DomSanitizer) { }

  ngOnInit() {
    this.vidUrl = this.domSatizer.bypassSecurityTrustResourceUrl("http://conasa.dnet.ec/admin/archivos/conasa/_sections/directorio.pdf");
  }

}
