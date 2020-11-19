import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MedicineService} from '../services/medicine.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.page.html',
  styleUrls: ['./medicine.page.scss'],
})
export class MedicinePage implements OnInit {

  public record: string;
  private info: any;
  private banderas = {
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

  private pictogramasArray : any;
  private dosage_flag :boolean;
  constructor(private activatedRoute: ActivatedRoute,
    private medicineService:MedicineService) { }

  ngOnInit() { // setear parte offline
    this.record = this.activatedRoute.snapshot.paramMap.get('record');
    this.medicineService.getDataEachMedicine(this.record).subscribe((res) =>{ //una opcion es enviar el subcribe al service
      this.info =res;
      this.pictogramasArray = res["picto"].split("|")
      if (res["dosage_image"].localeCompare("")){
        this.dosage_flag = true
      }else{
        this.dosage_flag = false
      }
      //console.log(this.pictogramasArray)
      console.log(this.info)
      //this.databaseService.ResiveArray(this.medicineArrayFinal)
    },(error)=>{console.log(error)})

  }

  clickBotonesInformativos(dato : string){
    if (!this.banderas[dato]){
      this.banderas[dato]=true
    }else{
      this.banderas[dato]=false
    }
  }

}
