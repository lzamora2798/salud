import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  url ='http://conasa.dnet.ec/ws/_getSearch_Medicine.ws.php'
  public items: any;
  constructor(private http: HttpClient) {
    this.items = this.getData();
  }

  getData(){
    return this.http.get(`${this.url}`).pipe(map( action =>{
        return action['result'];
    }));
  }
  


}
