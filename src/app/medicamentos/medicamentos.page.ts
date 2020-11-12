import { Component, OnInit } from '@angular/core';
import {MedicineService} from '../services/medicine.service';
import {DatabaseService} from '../services/database.service'
@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.page.html',
  styleUrls: ['./medicamentos.page.scss'],
})
export class MedicamentosPage implements OnInit {
  private medicineArray : any
  private medicineArrayFinal : any
  private numeroItems =0
  private bandera = true;
  private contadorBandera = 0;
  public searchTerm: string = "";
  constructor(private medicineService:MedicineService,private databaseService: DatabaseService) {

    
    this.medicineService.getData().subscribe((res) =>{ //una opcion es enviar el subcribe al service
      this.medicineArrayFinal =res;
      this.setFilteredItems();
      //console.log(this.medicineArray)
    },(error)=>{console.log(error)})
   }

  ngOnInit() {
    

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
    this.numeroItems = Object.keys(this.medicineArray).length;
    console.log(this.numeroItems)
  }

  filterItems(searchTerm) {
    return this.medicineArrayFinal.filter(item => {
      return item.description.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  
}
