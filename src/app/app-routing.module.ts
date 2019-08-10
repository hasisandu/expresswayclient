import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainViewComponent} from "./main-view/main-view.component";
import {ViewComponent} from "./view/view.component";
import {BrowsinghystryComponent} from "./browsinghystry/browsinghystry.component";
import {TodaydealsComponent} from "./todaydeals/todaydeals.component";
import {ItemResultViewComponent} from "./item-result-view/item-result-view.component";
import {StarrateComponent} from "./starrate/starrate.component";

const routes: Routes = [
  {path: '', component: ViewComponent},
  {path: 'home', component: ViewComponent},
  {path: 'main-view', component: MainViewComponent},
  {path: 'browsing-history', component: BrowsinghystryComponent},
  {path: 'today-deals', component: TodaydealsComponent},
  {path: 'item-result-view/:name', component: ItemResultViewComponent},
  {path: 'star-rate', component: StarrateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
