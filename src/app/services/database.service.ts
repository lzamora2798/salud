import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import {BehaviorSubject,Observable} from 'rxjs';

export interface Medicina {
  code: number;
  concentration: string;
  description: string;
  form: string;
}

@Injectable({
  providedIn: 'root'
}) 
export class DatabaseService {
  private db: SQLiteObject;
  private medicinas = new BehaviorSubject([]);
  private medici = []
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private plt: Platform,private sqlite: SQLite) { 
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'studentsDatabase.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.db = db;
        let sql1 = "CREATE TABLE IF NOT EXISTS medicinas (code TEXT, concentration TEXT, description TEXT, form TEXT)";
        this.db.executeSql(sql1, []);
      
    });
    });

          
     
  }
  CreateMedicine(code:string, concentration:string,description:string,form:string){
    return new Promise ((resolve, reject) => {
      
      let sql = "INSERT INTO medicinas (code, concentration, description,form) VALUES (?,?,?,?);";
      this.db.executeSql(sql, [ code,concentration,description,form]).then((data) =>{
        resolve(data);
        
      }, (error) => {
        reject(error);
      });
    });
  }

  ResiveArray(array:Array<any>){
    for (let medicine of array){
        //this.CreateMedicine(medicine.code,medicine.concentration,medicine.description,
          //medicine.form)

          let sql = "INSERT INTO medicinas (code, concentration, description,form) VALUES (?,?,?,?);";
          this.db.executeSql(sql, [ medicine.code,medicine.concentration,medicine.description,
            medicine.form]).then((data) =>{
            console.log(data)
            
          }, (error) => {
            console.log(error);
          });
    } 
    this.dbReady.next(true);
    /*this.db.executeSql("INSERT INTO danceMoves (name) values (?)", [ "HOLA"]).then(()=>{
      console.log("Se agrego")
    }).catch((error)=>{
      console.log(error)
    })*/


    //this.CreateMedicine("code","concentra","descrip","dosage_","form","group",
    //"record","subgrou","subtype")
  }

  ObtenerestudiantesOffline(){
  
    return this.db.executeSql('SELECT * FROM medicinas', []).then(data => {
      let medicinas: Medicina[] = [];
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          medicinas.push({
           
            code: data.rows.item(i).code,
            concentration: data.rows.item(i).concentration,
            description: data.rows.item(i).description,
            form: data.rows.item(i).form
           });
        
        }
      }
      this.medicinas.next(medicinas);
    });
  }

  getMedicineOfflin(): Observable<Medicina[]> {
    return this.medicinas.asObservable();
  }

  getDatabaseState() {
    return this.dbReady.asObservable();
  }

  getMediOff(){
    return this.medici
  }


}
