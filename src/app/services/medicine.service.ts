import { HttpClient } from '@angular/common/http';
import { ArrayType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  url ='http://conasa.dnet.ec/ws/_getSearch_Medicine.ws.php'
  url2 = 'http://conasa.dnet.ec/ws/_getAll_Detail.ws.php'
  filtro1= 'http://conasa.dnet.ec/ws/_getFilter1.ws.php' // no necesita imput
  filtro2= 'http://conasa.dnet.ec/ws/_getFilter2.ws.php'
  filtro3= 'http://conasa.dnet.ec/ws/_getFilter3.ws.php'
  filtro4= 'http://conasa.dnet.ec/ws/_getFilter4.ws.php'
  public items: any;
  public ArrayItems: ArrayType;
  constructor(private http: HttpClient) {
    this.items = this.getData(); 
  }

  getData(){
    return this.http.get(`${this.url}`).pipe(map( action =>{
        return action['result'];
    }));
  }

  getDataEachMedicine(record : string){
    return this.http.get(`${this.url2}?_record=${record}`).pipe(map( action =>{
        return action['result']['0'];
    }));
  }
  
  getFilter1(){
    return this.http.get(`${this.filtro1}`).pipe(map( action =>{
        return action['result'];
    }));
  }
  
  getFilter2(record:string){
    return this.http.get(`${this.filtro2}?_group=${record}`).pipe(map( action =>{
        return action['result'];
    }));
  }
  

}
