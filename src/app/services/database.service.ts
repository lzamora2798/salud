import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import {BehaviorSubject,Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
}) 
export class DatabaseService {
  private db: SQLiteObject
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private plt: Platform,private sqlite: SQLite) { 
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'studentsDatabase.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.db = db;
        let sql1 = "CREATE TABLE IF NOT EXISTS medicinas (code TEXT PRIMARY KEY, concentration TEXT, description TEXT, dosage_image TEXT, form TEXT, group TEXT, record TEXT, subgroup TEXT, subtype TEXT);";
        this.db.executeSql(sql1, []);
      
    });
    });

          
     
  }
  CreateMedicine(code:string, concentration:string,description:string,dosage_image:string,form:string,group:string,record:string,subgroup:string,subtype:string){
    return new Promise ((resolve, reject) => {
      
      let sql = "INSERT INTO medicinas (code, concentration, description,dosage_image,form,group,record,subgroup,subtype) VALUES (?, ?, ?,?, ?, ?,?, ?, ?);";
      this.db.executeSql(sql, [ code,concentration,description,dosage_image,form,group,record,subgroup,subtype]).then((data) =>{
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  }

  ResiveArray(array:Array<any>){
    for (let medicine of array){
        this.CreateMedicine(medicine.code,medicine.concentration,medicine.description,
          medicine.dosage_image,medicine.form,medicine.group,medicine.record,medicine.subgroup,medicine.subtype)
    }
  }

  
}
