
import { Component } from '@angular/core';
import { DomSanitizer,SafeResourceUrl} from '@angular/platform-browser'
@Component({
  selector: 'app-conamei',
  templateUrl: './conamei.page.html',
  styleUrls: ['./conamei.page.scss'],
})


export class ConameiPage {

  vidUrl:SafeResourceUrl;
  constructor(private domSatizer :DomSanitizer) { 

    this.vidUrl = this.domSatizer.bypassSecurityTrustResourceUrl("http://conasa.dnet.ec/admin/archivos/conasa/_sections/conamei.pdf");
    console.log(this.vidUrl)
  }


}

