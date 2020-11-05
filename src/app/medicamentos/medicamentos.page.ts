import { Component, OnInit } from '@angular/core';
import {MedicineService} from '../services/medicine.service';
import { FormControl } from "@angular/forms";
@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.page.html',
  styleUrls: ['./medicamentos.page.scss'],
})
export class MedicamentosPage implements OnInit {
  private medicineArray : any
  private medicineArrayFinal : any
  private searchControl: FormControl;
  private bandera = true;
  private contadorBandera = 0;
  public searchTerm: string = "";
  constructor(private medicineService:MedicineService) {
    this.searchControl = new FormControl();
   }

  ngOnInit() {
    this.medicineService.getData().subscribe((res) =>{
      this.medicineArray = res;
      this.medicineArrayFinal =res;
      console.log(this.medicineArray)
    },(error)=>{console.log(error)})
  }

  mostrarFiltro(){
    if (this.contadorBandera == 0){
      this.bandera = false;
      this.contadorBandera = 1;
    }
    else{
      this.bandera = true;
      this.contadorBandera = 0;
    }
  }
  setFilteredItems() {
    this.medicineArray = this.filterItems(this.searchTerm);
  }

  filterItems(searchTerm) {
    return this.medicineArrayFinal.filter(item => {
      return item.description.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  
}
