import { Component, OnInit } from '@angular/core';
import { DomSanitizer,SafeResourceUrl} from '@angular/platform-browser'
@Component({
  selector: 'app-acuerdo',
  templateUrl: './acuerdo.page.html',
  styleUrls: ['./acuerdo.page.scss'],
})
export class AcuerdoPage  {

  vidUrl:SafeResourceUrl;
  constructor(private domSatizer :DomSanitizer) { }

  ngOnInit() {
    this.vidUrl = this.domSatizer.bypassSecurityTrustResourceUrl("assets/pdf/acuerdo.pdf");
  }

}

