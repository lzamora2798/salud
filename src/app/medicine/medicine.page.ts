import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.page.html',
  styleUrls: ['./medicine.page.scss'],
})
export class MedicinePage implements OnInit {

  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('code');
  }

}
