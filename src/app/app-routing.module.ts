import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AddVacationComponent } from './components/add-vacation/add-vacation.component';
import { SeeAllVacationComponent } from './components/see-all-vacation/see-all-vacation.component';
import { SeeCountryComponent } from './components/see-country/see-country.component';
import { SeeAllCountryComponent } from './components/see-all-country/see-all-country.component';

const routes: Routes = [
  {path:'',component:CarouselComponent},
  {path:'add',component:AddVacationComponent},
  {path:'see-all',component:SeeAllVacationComponent},
  {path:'see-all-country',component:SeeAllCountryComponent},
  {path:'see-country/:country',component:SeeCountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
