import { Component, OnInit ,OnDestroy , AfterViewInit} from '@angular/core';
import {MedicineService} from '../services/medicine.service';
import { ToastController,LoadingController } from '@ionic/angular';
import { Plugins, NetworkStatus } from '@capacitor/core';

const { Network } = Plugins;

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.page.html',
  styleUrls: ['./medicamentos.page.scss'],
})
export class MedicamentosPage implements OnInit {
  public medicineArray : any
  public medicineArrayFinal : any
  public grupo_anatomico : any
  public grupo_terapeutico : any
  public subgrupo_terapeutico : any
  public subgrupoquimico_terapeutico : any
  public frecuentes : any
  public searchTerm: string = "";
  public anatomico :string = "";
  public terapeutico :string = "";
  public subterapeutico :string = "";
  public subquimicoterapeutico : string = "";
  public filtrofrecuente : string = "";
  public vacio: string = ""
  public bandera = true;
  private contadorBandera = 0;
  public numeroItems =0
  public isOffline = false;
  public flag_terapeutico = true;
  public flag_subterapeutico = true;
  public flag_subquimicoterapeutico = true;
  networkStatus: NetworkStatus;
  // loadinG: any;
  
  constructor(private medicineService:MedicineService,
    //private databaseService: DatabaseService,
    public toastController: ToastController,
    public loadingControler:LoadingController) {
      
   }
   async showLoading(mensaje: string){   
    const loadinG = await this.loadingControler.create(
      {message:mensaje}
    );
      loadinG.present()
      return loadinG
   }

  async ngOnInit() {
    let state = await Network.getStatus();
    this.networkStatus = state;
    const loadingG = await this.showLoading("espere...");
    if(!state.connected){ // enviar las alertas de las denuncias que surgan en vivo
      this.presentToast("Modo Offline")
      //this.showLoading("Espere") //mesaje del modal de esperar 
      this.medicineService.getOfflinedata('main').then((data)=>{
        this.medicineArrayFinal =data;
        this.setFilteredItems();
        
        //if (this.medicineArrayFinal){}
      },(error)=>{
        console.log(error)
      }).finally(()=>{
        setTimeout(()=>{loadingG.dismiss()},500)
      });
      this.capturarGrupoAnatomico();          
    }
    else{ // cuando si hay conexion online
      this.presentToast("Modo Online") 
      //this.showLoading("Espere") //mesaje del modal de esperar 
      this.medicineService.getData().subscribe((res) =>{ //una opcion es enviar el subcribe al service
        this.medicineArrayFinal =res;
        this.setFilteredItems();
        //this.databaseService.ResiveArray(this.medicineArrayFinal)
        if (this.medicineArrayFinal){
          setTimeout(()=>{loadingG.dismiss()},500)
        }
 
      },(error)=>{console.log(error)})
     
     
      this.capturarGrupoAnatomico(); // estos dos filtros se ejecutan al inicio
      this.capturarFrecuentes();
      
    }

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
 
  }
  setFilteredItems() {
    this.medicineArray = this.filterItems(this.searchTerm,"description");
    if(this.medicineArray.length == 0){
      this.medicineArray = this.filterItems(this.searchTerm.toUpperCase(),"code");
    }
    this.numeroItems = Object.keys(this.medicineArray).length;
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
    if(this.networkStatus.connected){
    this.medicineService.getfamilyFilter(this.filtrofrecuente).subscribe(
      (res) =>{
        this.medicineArray = res;
        this.numeroItems = Object.keys(this.medicineArray).length;
        this.medicineService.saveGrupoTerapeuticoOffline(this.filtrofrecuente,res)
      })
    }
    else{
      this.medicineService.getOfflinedata(this.filtrofrecuente).then((res)=>{
        this.medicineArray=res;
        this.numeroItems = Object.keys(this.medicineArray).length;
      }) 
    }
  }

  filterItems(searchTerm,clave:string) { //metodo generico para buscar por filtros
    return this.medicineArrayFinal.filter(item => {
      return item[clave].toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }




  determinarGrupo(){
    this.setFilteredGroup();
    this.flag_terapeutico = false;
    this.capturarGrupoTerapeutico();
  }

 

  determinarGrupoTerapeutico(){
    this.setFilteredsubGroup();
    this.flag_subterapeutico = false;
    this.capturarSubGrupoTerapeutico();
  }

  
  determinarSubGrupoTerapeutico(){
    this.setFilteredType();
    this.flag_subquimicoterapeutico = false;
    this.capturarSubGrupoQuimicoTerapeutico();
  }

  determinarSubGrupoQuimicoTerapeutico(){
    this.setFilteredSubType();
  }

  determinarFrecuentes(){
    this.setFilterFrecuente();
  }

  capturarGrupoAnatomico(){ 
    if(this.networkStatus.connected){
      this.medicineService.getFilter1().subscribe((res)=>{
        this.grupo_anatomico = res
      })
    }else{
      this.medicineService.getOfflinedata('filtro1').then((res)=>{
        this.grupo_anatomico=res;
      })
    }
    
  }

  capturarGrupoTerapeutico(){  //hace llamadas del servicio para el filtro 2 
    if(this.networkStatus.connected){
      this.medicineService.getFilter2(this.anatomico).subscribe((res)=>{
        this.grupo_terapeutico = res
        this.medicineService.saveGrupoTerapeuticoOffline(this.anatomico,res);
      })
    }else{
      this.medicineService.getOfflinedata(this.anatomico).then((res)=>{
        this.grupo_terapeutico=res;
      })
    }
    
  }

  capturarSubGrupoTerapeutico(){  // hace llamadas del servicio para el filtro 3  
    if(this.networkStatus.connected){
      this.medicineService.getFilter3(this.terapeutico).subscribe((res)=>{
        this.subgrupo_terapeutico = res
        this.medicineService.saveGrupoTerapeuticoOffline(this.terapeutico,res);
      })
  
    }else{
      this.medicineService.getOfflinedata(this.terapeutico).then((res)=>{
        this.subgrupo_terapeutico=res;
      })
    }
  }
  
  capturarSubGrupoQuimicoTerapeutico(){  // hace llamadas del servicio para el filtro 3 
    
    if(this.networkStatus.connected){
      this.medicineService.getFilter4(this.subterapeutico).subscribe((res)=>{
        this.subgrupoquimico_terapeutico = res
        this.medicineService.saveGrupoTerapeuticoOffline(this.subterapeutico,res);
      }) 
    }else{
      this.medicineService.getOfflinedata(this.subterapeutico).then((res)=>{
        this.subgrupoquimico_terapeutico=res;
      })
    }
  }
  
  capturarFrecuentes(){  // hace llamadas del servicio para el filtro 3 
    this.medicineService.getFilterF().subscribe((res)=>{
      this.frecuentes = res
    })
  }

  botonqumicoterapeutico(){
    this.subquimicoterapeutico = ""
    this.setFilteredType();
  }

  botonsubterapeutico(){
    this.subgrupoquimico_terapeutico = []
    this.subterapeutico = ""
    this.botonqumicoterapeutico()
    this.setFilteredsubGroup();
  }

  botonterapeutico(){
    this.subgrupo_terapeutico = []
    this.subgrupoquimico_terapeutico = []
    this.terapeutico = ""
    this.botonsubterapeutico()
    this.setFilteredGroup();
  }

  botonanatomico(){
    this.subgrupo_terapeutico = []
    this.subgrupoquimico_terapeutico = []
    this.grupo_terapeutico = []
    this.anatomico = ""
    this.botonterapeutico();
    this.medicineArray = this.medicineArrayFinal
    this.numeroItems = Object.keys(this.medicineArrayFinal).length;
  }

  botonfiltroterapeutico(){
      this.filtrofrecuente = ""
      this.medicineArray = this.medicineArrayFinal
      this.numeroItems = Object.keys(this.medicineArrayFinal).length;
  }

  recargarTodo(){

  }



}
