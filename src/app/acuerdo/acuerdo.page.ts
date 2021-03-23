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
    //this.medicineService.downloadFile("https://file-examples-com.github.io/uploads/2017/10/file-example_PDF_1MB.pdf");
    //this.medicineService.download2("https://file-examples-com.github.io/uploads/2017/10/file-example_PDF_1MB.pdf")
  }
}

