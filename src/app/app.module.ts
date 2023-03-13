import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { CharacterCardPageComponent } from 'src/app/components/pages/character-card-page/character-card-page.component';
import { HttpClientModule } from '@angular/common/http';
import { HistoryBackComponent } from './components/shared/history-back/history-back.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { CharacterFilterPipe } from './components/shared/pipes/character-filter.pipe';
import { CharacterViewsComponent } from './components/shared/character-views/character-views.component';
import { CharacterCardComponent } from 'src/app/components/shared/character-card/character-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CharacterCardPageComponent,
    HistoryBackComponent,
    HeaderComponent,
    CharacterFilterPipe,
    CharacterViewsComponent,
    CharacterCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
