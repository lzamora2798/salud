import { Component, OnInit } from '@angular/core';
import { DomSanitizer,SafeResourceUrl} from '@angular/platform-browser'
import {MedicineService} from '../services/medicine.service';
@Component({
  selector: 'app-acuerdo',
  templateUrl: './acuerdo.page.html',
  styleUrls: ['./acuerdo.page.scss'],
})
export class AcuerdoPage  {

  pdfSRC:string;
  constructor(private domSatizer :DomSanitizer,private medicineService:MedicineService) { 

    this.pdfSRC = "assets/pdf/acuerdo.pdf"
    this.medicineService.downloadFile("https://aws1.discourse-cdn.com/ionicframework/original/3X/3/b/3bcceade60c32df77565a17af301b363f2a418ae.png");
  }
}

