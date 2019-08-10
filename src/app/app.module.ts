import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MainViewComponent} from './main-view/main-view.component';
import {ViewComponent} from './view/view.component';
import {FooterComponent} from './footer/footer.component';
import {CatogeryServiceService} from "./service/catogery-service.service";
import {HttpClientModule} from "@angular/common/http";
import {BottoDetailComponent} from './botto-detail/botto-detail.component';
import {BrowsinghystryComponent} from './browsinghystry/browsinghystry.component';
import {DepartmentService} from "./service/department.service";
import {TodaydealsComponent} from './todaydeals/todaydeals.component';
import {ItemResultViewComponent} from './item-result-view/item-result-view.component';
import {StarrateComponent} from './starrate/starrate.component';
import {FromExpressWayComponent} from './from-express-way/from-express-way.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainViewComponent,
    ViewComponent,
    FooterComponent,
    BottoDetailComponent,
    BrowsinghystryComponent,
    TodaydealsComponent,
    ItemResultViewComponent,
    StarrateComponent,
    FromExpressWayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [
    CatogeryServiceService,
    DepartmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
