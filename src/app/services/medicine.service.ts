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
  
 

}
