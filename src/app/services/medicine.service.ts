import { HttpClient } from '@angular/common/http';
import { ArrayType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { Plugins, NetworkStatus } from '@capacitor/core';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
const { Storage ,Network} = Plugins;


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
  filtroF= 'http://conasa.dnet.ec/ws/_getFilterF.ws.php'
  filtrofamilia = 'http://conasa.dnet.ec/ws/_getFrecuency_Medicine.ws.php'
  public items: any;
  public ArrayItems: ArrayType;
  public networkStatus: NetworkStatus;
  public fileTransfer: FileTransferObject = this.transfer.create();

  constructor(private http: HttpClient,private transfer: FileTransfer, private file: File) {
    //this.items = this.getData(); 
  
    this.saveEverything();
    this.saveFiltro1Offline();
  }


 async saveEverything(){
  this.networkStatus = await Network.getStatus();
  if(this.networkStatus.connected){
  
  await  this.getData().forEach((value)=>{
      Storage.set({
        key: 'main',
        value: JSON.stringify(value)
      })
    })

  }
  }

  async getOfflinedata(data:string) {
    const ret = await Storage.get({ key: data });
    const user = JSON.parse(ret.value);
    return user;
  }


  async saveFiltro1Offline(){
    this.networkStatus = await Network.getStatus(); //solo si esta online descarga 
    if(this.networkStatus.connected){
    await this.getFilter1().forEach((value)=>{
      Storage.set({
        key: 'filtro1',
        value: JSON.stringify(value)
        })
      })
      await this.getFilterF().forEach((value)=>{
        Storage.set({
          key: 'frecuentes',
          value: JSON.stringify(value)
          })
        })   
    }
  }

  async saveGrupoTerapeuticoOffline(clave:string,valor:any){

    if(clave.length>0){
      this.networkStatus = await Network.getStatus(); //solo si esta online descarga 
      Storage.set({
        key: clave,
        value: JSON.stringify(valor)
        })  
    }
    
  
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
  
  async saveEachMedicineOffline(kEy:string){
    this.networkStatus = await Network.getStatus(); //solo si esta online descarga 
    if(this.networkStatus.connected){
    await this.getDataEachMedicine(kEy).forEach((value)=>{
      Storage.set({
        key: kEy,
        value: JSON.stringify(value)
      })
    })
  }
  
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
  
  getFilter3(record:string){
    return this.http.get(`${this.filtro3}?_subgroup=${record}`).pipe(map( action =>{
        return action['result'];
    }));
  }

  getFilter4(record:string){
    return this.http.get(`${this.filtro4}?_type=${record}`).pipe(map( action =>{
        return action['result'];
    }));
  }

  getFilterF(){
    return this.http.get(`${this.filtroF}`).pipe(map( action =>{
        return action['result'];
    }));
  }

 

  getfamilyFilter(family:string){
    return this.http.get(`${this.filtrofamilia}?_family=${family}`).pipe(map( action =>{
      return action['result'];
  }));
  }

  download(url:string) {
    this.fileTransfer.download('http://conasa.dnet.ec/admin/archivos/conasa/_pictogramas/' +url, this.file.dataDirectory + url).then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      console.log(error)
    });
  }

}
