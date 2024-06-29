import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHeroComponent } from './create-hero/create-hero.component';
import { HeroListComponent } from './hero-list/hero-list.component';

const routes: Routes = [
{path:'create-hero',component:CreateHeroComponent},
{path:'heros',component:HeroListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
