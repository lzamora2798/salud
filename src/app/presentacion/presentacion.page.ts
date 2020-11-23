import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.page.html',
  styleUrls: ['./presentacion.page.scss'],
})
export class PresentacionPage implements OnInit {


  vidUrl="http://conasa.dnet.ec/admin/archivos/conasa/_sections/presentacion.pdf"
  constructor() { }

  ngOnInit() {
  }

}
