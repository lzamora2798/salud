import { Component, OnInit } from '@angular/core';
import { DomSanitizer,SafeResourceUrl} from '@angular/platform-browser'
import {MedicineService} from '../services/medicine.service';
@Component({
  selector: 'app-paginaweb',
  templateUrl: './paginaweb.page.html',
  styleUrls: ['./paginaweb.page.scss'],
})
export class PaginawebPage implements OnInit {
  vidUrl:SafeResourceUrl;
  constructor(private domSatizer :DomSanitizer, private medicineservi:MedicineService) { }

  ngOnInit() {
    this.vidUrl = this.domSatizer.bypassSecurityTrustResourceUrl(this.medicineservi.link);
  }

}
