import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainViewComponent} from "./main-view/main-view.component";
import {ViewComponent} from "./view/view.component";

const routes: Routes = [
  {path: '', component: ViewComponent},
  {path: 'home', component: ViewComponent},
  {path:'main-view',component:MainViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
