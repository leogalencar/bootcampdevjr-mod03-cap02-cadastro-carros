import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarTableComponent } from './components/car-table/car-table.component';
import { CarsComponent } from './pages/cars/cars.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarFormComponent,
    CarTableComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
