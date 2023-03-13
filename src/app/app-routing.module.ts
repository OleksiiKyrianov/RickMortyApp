import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from 'src/app/components/pages/main-page/main-page.component';
import { CharacterCardPageComponent } from 'src/app/components/pages/character-card-page/character-card-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path:'card', component: CharacterCardPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
