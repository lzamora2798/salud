import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SQLite} from '@ionic-native/sqlite/ngx';
import {HttpClientModule} from '@angular/common/http';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Network } from '@ionic-native/network/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    PinchZoomModule,
    PdfViewerModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    Network,
    FileTransfer,
    FileTransferObject,
    File,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
