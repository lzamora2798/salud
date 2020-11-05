import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'MEDICAMENTOS',
      url: '/medicamentos',
      icon: 'reader'
    },
    {
      title: 'PRESENTACION',
      url: '/presentacion',
      icon: 'information-circle'
    },
    {
      title: 'CONASA',
      url: '/conasa',
      icon: 'copy'
    },
    {
      title: 'CONAMEI',
      url: '/conamei',
      icon: 'book'
    },
    {
      title: 'ACUERDO MINISTERIAL',
      url: '/acuerdo',
      icon: 'pencil'
    },
    {
      title: 'INFORMACION',
      url: '/informacion',
      icon: 'information-circle'
    },
    {
      title: 'conasa.dnet.ec',
      url: '/paginaweb',
      icon: 'globe'
    }
  ];
  public labels = ['Family'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
