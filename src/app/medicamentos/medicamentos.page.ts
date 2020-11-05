import { Component, OnInit } from '@angular/core';
import {MedicineService} from '../services/medicine.service';
@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.page.html',
  styleUrls: ['./medicamentos.page.scss'],
})
export class MedicamentosPage implements OnInit {
  medicineArray
  tamanoArray
  constructor(private medicineService:MedicineService) { }

  ngOnInit() {
    this.medicineService.getData().subscribe((res) =>{
      this.medicineArray = res
      console.log(this.medicineArray)
      this.tamanoArray = this.medicineArray.lenght
      console.log("array size",this.tamanoArray)
    },(error)=>{console.log(error)})
  }

}
