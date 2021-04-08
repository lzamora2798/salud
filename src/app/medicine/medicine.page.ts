import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MedicineService} from '../services/medicine.service';
import { Plugins, NetworkStatus } from '@capacitor/core';
import { File } from '@ionic-native/file/ngx';
const { Network} = Plugins;
@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.page.html',
  styleUrls: ['./medicine.page.scss'],
})
export class MedicinePage implements OnInit {

  public record: string;
  public info: any ;
  public escondido : boolean = false;
  public dosilink : string = '';
  public banderas = {
    picto:true,
    indicaciones:true,
    dosificacion:true,
    reacciones:true,
    contraindica:true,
    precauciones:true,
    interaccion:true,
    usoen:true,
    observaciones:true,
    citados:true
  }

  public pictogramasArray : any;
  public dosage_flag :boolean;
  public level1=true
  public level2=true
  public level3=true
  public url : string ;
  constructor(private activatedRoute: ActivatedRoute,
    private medicineService:MedicineService, private file: File) { }

  async ngOnInit() { // setear parte offline
    this.record = this.activatedRoute.snapshot.paramMap.get('record');

   
    let state = await Network.getStatus();
  
    if(state.connected){
      this.escondido = false; 
    this.medicineService.getDataEachMedicine(this.record).subscribe((res) =>{ //una opcion es enviar el subcribe al service
      this.info =res;
      this.url = this.medicineService.link+'/admin/archivos/conasa/_pictogramas/';
      this.dosilink = this.medicineService.link +'/admin/archivos/conasa/_dosificacion/' + this.info.dosage_image;
      this.medicineService.saveEachMedicineOffline(this.record);
      this.pictogramasArray = res["picto"].split("|")
      //for( var i = 0; i<this.pictogramasArray.length;i++){
        //this.medicineService.download(this.pictogramasArray[i])
      //}
      
      if (res["dosage_image"].localeCompare("")){
        this.dosage_flag = true
      }else{
        this.dosage_flag = false
      }   
      if(res["level_1"] == 'x')
        this.level1=false
      if(res["level_2"] == 'x')
        this.level2=false
      if(res["level_3"] == 'x')
        this.level3=false
    },(error)=>{console.log(error)})
    }else{
      this.medicineService.getOfflinedata(this.record).then((res)=>{
        if (res){
        this.escondido = false;
        this.info =res;
        this.url = 'file:///data/user/0/com.your.app/files/';
        this.medicineService.saveEachMedicineOffline(this.record);
        this.pictogramasArray = res["picto"].split("|")
        if (res["dosage_image"].localeCompare("")){
          this.dosage_flag = true
        }else{
          this.dosage_flag = false
        }   
        if(res["level_1"] == 'x')
          this.level1=false
        if(res["level_2"] == 'x')
          this.level2=false
        if(res["level_3"] == 'x')
          this.level3=false
  
        //console.log(this.info)
      }
      else{
        console.log(res)
        this.escondido = true;
      }
      },(error)=>{console.log(error);
       
        
      })
    }
  }

  clickBotonesInformativos(dato : string){
    if (!this.banderas[dato]){
      this.banderas[dato]=true
    }else{
      this.banderas[dato]=false
    }
  }

  retroceder(){
    console.log("retrocede")
  }

}
