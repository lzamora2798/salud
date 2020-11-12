import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';


@Injectable({
  providedIn: 'root'
}) 
export class DatabaseService {
  private db: SQLiteObject;
  private isOpen: boolean
  constructor(private plt: Platform,private storage: SQLite) { 
    this.plt.ready().then(() => {
    if(!this.isOpen){

      this.storage.create({name:'data.db',location:'default'}).then(
        (db:SQLiteObject)=>{
          this.db=db
          let sql = "CREATE TABLE IF NOT EXISTS medicinas (code TEXT, concentration TEXT, description TEXT, dosage_image TEXT, form TEXT, group TEXT, record TEXT, subgroup TEXT, subtype TEXT)"
          this.db.executeSql(sql,[])
          console.log("tabla creada")
          this.isOpen= true;
        }
      ).catch((error)=>{
        console.log("ERRRO",error)
      })
    }
    });
  }
  CreateMedicine(code:string, concentration:string,description:string,dosage_image:string,form:string,group:string,record:string,subgroup:string,subtype:string){
    return new Promise ((resolve, reject) => {
      let sql = "INSERT INTO medicinas (code, concentration, description,dosage_image,form,group,record,subgroup,subtype) VALUES (?, ?, ?,?, ?, ?,?, ?, ?)";
      this.db.executeSql(sql, [ code,concentration,description,dosage_image,form,group,record,subgroup,subtype]).then((data) =>{
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  }

  ResiveArray(array:Array<any>){
    for (let equipo of array){
        console.log(equipo)
    }
  }

  
}
