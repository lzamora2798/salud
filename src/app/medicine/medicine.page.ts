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
  constructor(private activatedRoute: ActivatedRoute,
    private medicineService:MedicineService) { }

  ngOnInit() { // setear parte offline
    this.record = this.activatedRoute.snapshot.paramMap.get('record');
    this.medicineService.getDataEachMedicine(this.record).subscribe((res) =>{ //una opcion es enviar el subcribe al service
      this.info =res;
    
      console.log(this.info)
      //this.databaseService.ResiveArray(this.medicineArrayFinal)

    },(error)=>{console.log(error)})

  }

  clickBotonesInformativos(dato : string){
    console.log(dato)
    if (!this.banderas[dato]){
      this.banderas[dato]=true
    }else{
      this.banderas[dato]=false
    }
  }

}
