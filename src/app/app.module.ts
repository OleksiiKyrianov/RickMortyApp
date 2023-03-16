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
import { AuthComponent } from './components/shared/auth/auth.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment.prod';
import { FirstWordPipe } from './components/shared/pipes/first-word.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CharacterCardPageComponent,
    HistoryBackComponent,
    HeaderComponent,
    CharacterFilterPipe,
    CharacterViewsComponent,
    CharacterCardComponent,
    AuthComponent,
    FirstWordPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
