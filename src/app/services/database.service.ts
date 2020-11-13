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
      })
    });

          
     
  }
  CreateMedicine(code:string, concentration:string,description:string,dosage_image:string,form:string,group:string,record:string,subgroup:string,subtype:string){
    return new Promise ((resolve, reject) => {
      let sql1 = "CREATE TABLE IF NOT EXISTS medicinas (code INTEGER PRIMARY KEY AUTOINCREMENT, concentration TEXT, description TEXT, dosage_image TEXT, form TEXT, group TEXT, record TEXT, subgroup TEXT, subtype TEXT);";
      let sql = "INSERT INTO medicinas (code, concentration, description,dosage_image,form,group,record,subgroup,subtype) VALUES (?, ?, ?,?, ?, ?,?, ?, ?);";
      this.db.executeSql(sql1, []);
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
