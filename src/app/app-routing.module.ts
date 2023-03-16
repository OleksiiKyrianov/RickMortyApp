import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from 'src/app/components/pages/main-page/main-page.component';
import { CharacterCardPageComponent } from 'src/app/components/pages/character-card-page/character-card-page.component';
import { AuthGuard } from 'src/app/services/auth.guard';

const routes: Routes = [
  {path: '', component: MainPageComponent, pathMatch: 'full'},
  {path:'card', component: CharacterCardPageComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
