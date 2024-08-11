import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {ProductPageComponent} from "../app/pages/product-page/product-page.component";
import {AboutPageComponent} from "../app/pages/about-page/about-page.component";

export const routes: Routes = [
  {path: '', component: ProductPageComponent},
  {path: 'about', component: AboutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {
}
