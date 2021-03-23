import { Component, OnInit } from '@angular/core';
import { DomSanitizer,SafeResourceUrl} from '@angular/platform-browser'
@Component({
  selector: 'app-paginaweb',
  templateUrl: './paginaweb.page.html',
  styleUrls: ['./paginaweb.page.scss'],
})
export class PaginawebPage implements OnInit {
  vidUrl:SafeResourceUrl;
  constructor(private domSatizer :DomSanitizer) { }

  ngOnInit() {
    this.vidUrl = this.domSatizer.bypassSecurityTrustResourceUrl("http://conamei.conasa.gob.ec/");
  }

}
