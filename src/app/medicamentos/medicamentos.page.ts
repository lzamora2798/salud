import { Component, OnInit ,OnDestroy , AfterViewInit} from '@angular/core';
import {MedicineService} from '../services/medicine.service';
//import {DatabaseService,Medicina} from '../services/database.service';
import { ToastController,LoadingController } from '@ionic/angular';
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
  private subgrupo_terapeutico : any
  private subgrupoquimico_terapeutico : any
  private frecuentes : any
  public searchTerm: string = "";
  private anatomico :string = "";
  private terapeutico :string = "";
  private subterapeutico :string = "";
  private subquimicoterapeutico : string = "";
  private filtrofrecuente : string = "";
  public vacio: string = ""
  private bandera = true;
  private contadorBandera = 0;
  private numeroItems =0
  private isOffline = false;
  public flag_terapeutico = true;
  public flag_subterapeutico = true;
  public flag_subquimicoterapeutico = true;
  networkStatus: NetworkStatus;
  loadinG:any;
  
  constructor(private medicineService:MedicineService,
    //private databaseService: DatabaseService,
    public toastController: ToastController,
    private loadingControler:LoadingController) {
      
   }

   async showLoading(mensaje: string){
      this.loadinG = await this.loadingControler.create(
        {message:mensaje
        }
      )
      return this.loadinG.present()
   }

  async ngOnInit() {
    
    let state = await Network.getStatus();
    console.log("status:",state.connected)
    if(!state.connected){ // enviar las alertas de las denuncias que surgan en vivo
      this.presentToast("Modo Offline")
      this.isOffline = true;
    }
    else{ // cuando si hay conexion online
      this.presentToast("Modo Online") 
      this.showLoading("Espere") //mesaje del modal de esperar 
      this.medicineService.getData().subscribe((res) =>{ //una opcion es enviar el subcribe al service
        this.medicineArrayFinal =res;
        this.setFilteredItems();
        console.log(this.medicineArray)
        //this.databaseService.ResiveArray(this.medicineArrayFinal)
        if (this.medicineArrayFinal){
          setTimeout(()=>{this.loadinG.dismiss()},1000)
        }
 
      },(error)=>{console.log(error)})

      this.capturarGrupoAnatomico(); // estos dos filtros se ejecutan al inicio
      this.capturarFrecuentes();
      
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

  setFilteredType() {
    this.medicineArray = this.filterItems(this.subterapeutico,"type");
    this.numeroItems = Object.keys(this.medicineArray).length;
  }

  setFilteredSubType() {
    this.medicineArray = this.filterItems(this.subquimicoterapeutico,"subtype");
    this.numeroItems = Object.keys(this.medicineArray).length;
  }

  setFilterFrecuente() {
    //this.medicineArray = this.filterItems(this.filtrofrecuente,"record");
    
    this.medicineService.getfamilyFilter(this.filtrofrecuente).subscribe(
      (res) =>{
        this.medicineArray = res;
        this.numeroItems = Object.keys(this.medicineArray).length;
      })
    
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

 

  determinarGrupoTerapeutico(){
    console.log(this.terapeutico)
    this.setFilteredsubGroup();
    this.flag_subterapeutico = false;
    this.capturarSubGrupoTerapeutico();
  }

  
  determinarSubGrupoTerapeutico(){
    console.log(this.subterapeutico)
    this.setFilteredType();
    this.flag_subquimicoterapeutico = false;
    this.capturarSubGrupoQuimicoTerapeutico();
  }

  determinarSubGrupoQuimicoTerapeutico(){
    console.log(this.subquimicoterapeutico);
    this.setFilteredSubType();
  }

  determinarFrecuentes(){
    console.log(this.filtrofrecuente)
    this.setFilterFrecuente();
  }

  capturarGrupoAnatomico(){ 
    this.medicineService.getFilter1().subscribe((res)=>{
      this.grupo_anatomico = res
    })
  }

  capturarGrupoTerapeutico(){  //hace llamadas del servicio para el filtro 2 
    this.medicineService.getFilter2(this.anatomico).subscribe((res)=>{
      this.grupo_terapeutico = res
    })
  }

  capturarSubGrupoTerapeutico(){  // hace llamadas del servicio para el filtro 3 
    this.medicineService.getFilter3(this.terapeutico).subscribe((res)=>{
      this.subgrupo_terapeutico = res
    })
  }
  
  capturarSubGrupoQuimicoTerapeutico(){  // hace llamadas del servicio para el filtro 3 
    this.medicineService.getFilter4(this.subterapeutico).subscribe((res)=>{
      this.subgrupoquimico_terapeutico = res
    })
  }
  
  capturarFrecuentes(){  // hace llamadas del servicio para el filtro 3 
    this.medicineService.getFilterF().subscribe((res)=>{
      this.frecuentes = res
    })
  }

  botonqumicoterapeutico(){
    this.flag_subquimicoterapeutico =true;
    this.subgrupoquimico_terapeutico = [];
    this.subquimicoterapeutico = ""
    this.setFilteredType();
  }

  botonsubterapeutico(){
    this.flag_subterapeutico =true;
    this.subgrupo_terapeutico = [];
    this.subterapeutico = ""
    this.botonqumicoterapeutico()
    this.setFilteredsubGroup();
  }

  botonterapeutico(){
    this.flag_terapeutico = true;
    this.grupo_terapeutico = []
    this.terapeutico = ""
    this.botonsubterapeutico()
    this.setFilteredGroup();
  }

  async recargarTodo(){
    this.flag_subquimicoterapeutico =true;
    this.subgrupoquimico_terapeutico = [];
    this.subquimicoterapeutico = ""
    this.flag_terapeutico = true;
    this.grupo_terapeutico = []
    this.terapeutico = ""
    this.flag_subterapeutico =true;
    this.subgrupo_terapeutico = [];
    this.subterapeutico = ""
    this.bandera = true;
    this.searchTerm= ""
    this.numeroItems = Object.keys(this.medicineArray).length;
    this.medicineArray = await this.medicineArrayFinal
    
  }

}
