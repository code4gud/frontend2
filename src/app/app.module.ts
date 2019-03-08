import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// add
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { MapComponent } from './map/map.component';
import { Work2Component }      from './work2/work2.component';
/* Routing Module */
import { AppRoutingModule }   from './app-routing.module';
import { TopNavComponent } from './top-nav/top-nav.component';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    Work2Component,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    // add
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBtjNt79CpDdQFzG1LrBkEQsCngBceeywo'}),
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    GoogleMapsAPIWrapper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
