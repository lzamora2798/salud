import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acuerdo',
  templateUrl: './acuerdo.page.html',
  styleUrls: ['./acuerdo.page.scss'],
})
export class AcuerdoPage implements OnInit {


  vidUrl = "http://conasa.dnet.ec/admin/archivos/conasa/_sections/acuerdo.pdf"
  constructor() { }

  ngOnInit() {
  }

}
