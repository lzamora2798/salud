import { Component, OnInit ,OnDestroy , AfterViewInit} from '@angular/core';
import {MedicineService} from '../services/medicine.service';
//import {DatabaseService,Medicina} from '../services/database.service';
import { ToastController } from '@ionic/angular';
import { Plugins, NetworkStatus, } from '@capacitor/core';

const { Network } = Plugins;

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.page.html',
  styleUrls: ['./medicamentos.page.scss'],
})
export class MedicamentosPage implements OnInit {
  private medicineArray : any
  private medicineArrayFinal : any
  private grupo_anatomico : any
  private grupo_terapeutico : any
  public searchTerm: string = "";
  private anatomico :string = "";
  private terapeutico :string = "";
  public vacio: string = ""
  private bandera = true;
  private contadorBandera = 0;
  private numeroItems =0
  
  public flag_terapeutico = true;
  networkStatus: NetworkStatus;
  //medicinaoffline: Medicina[] = [];
  constructor(private medicineService:MedicineService,
    //private databaseService: DatabaseService,
    public toastController: ToastController) {
      
   }

  async ngOnInit() {
    
    let state = await Network.getStatus();
    console.log("status:",state.connected)
    if(!state.connected){ // enviar las alertas de las denuncias que surgan en vivo
      this.presentToast("Modo Offline")
      
    }
    else{
      this.presentToast("Modo Online") 
      this.medicineService.getData().subscribe((res) =>{ //una opcion es enviar el subcribe al service
        this.medicineArrayFinal =res;
        this.setFilteredItems();
        console.log(this.medicineArray)
        //this.databaseService.ResiveArray(this.medicineArrayFinal)
 
      },(error)=>{console.log(error)})

      this.medicineService.getFilter1().subscribe((res)=>{
        this.grupo_anatomico = res
      })
      
    }
    /*this.databaseService.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.databaseService.getMedicineOfflin().subscribe(medi => {
          this.medicinaoffline = medi;
          console.log(this.medicinaoffline);
        });
      }
    });*/
    this.networkStatus = state;

  }
  async presentToast(texto:string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 1000
    });
    toast.present();
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
    this.medicineArray = this.filterItems(this.searchTerm,"description");
    this.numeroItems = Object.keys(this.medicineArray).length;
    console.log(this.numeroItems)
  }
  setFilteredGroup() {
    this.medicineArray = this.filterItems(this.anatomico,"group");
    this.numeroItems = Object.keys(this.medicineArray).length;
  }
  setFilteredsubGroup() {
    this.medicineArray = this.filterItems(this.terapeutico,"subgroup");
    this.numeroItems = Object.keys(this.medicineArray).length;
  }

  filterItems(searchTerm,clave:string) { //metodo generico para buscar por filtros
    return this.medicineArrayFinal.filter(item => {
      return item[clave].toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }


  determinarGrupo(){
    console.log(this.anatomico)
    this.setFilteredGroup();
    this.flag_terapeutico = false;
    this.capturarGrupoTerapeutico();
  }

  capturarGrupoTerapeutico(){
    this.medicineService.getFilter2(this.anatomico).subscribe((res)=>{
      this.grupo_terapeutico = res
    })
  }

  determinarGrupoTerapeutico(){
    console.log(this.terapeutico)
    this.setFilteredsubGroup();
    //this.flag_terapeutico = false;
    //this.capturarGrupoTerapeutico();
  }

  
}
