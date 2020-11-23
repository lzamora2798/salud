import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conamei',
  templateUrl: './conamei.page.html',
  styleUrls: ['./conamei.page.scss'],
})
export class ConameiPage implements OnInit {


  vidUrl="http://conasa.dnet.ec/admin/archivos/conasa/_sections/conamei.pdf"
  constructor() { }

  ngOnInit() {
  }

}
