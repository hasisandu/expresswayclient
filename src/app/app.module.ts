import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainViewComponent } from './main-view/main-view.component';
import { ViewComponent } from './view/view.component';
import { FooterComponent } from './footer/footer.component';
import {CatogeryServiceService} from "./service/catogery-service.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { BottoDetailComponent } from './botto-detail/botto-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainViewComponent,
    ViewComponent,
    FooterComponent,
    BottoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CatogeryServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
