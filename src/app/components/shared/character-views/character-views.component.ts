import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from 'src/app/models/character';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Router } from '@angular/router';
import { CharacterFilterPipe } from 'src/app/components/shared/pipes/character-filter.pipe';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-character-views',
  templateUrl: './character-views.component.html',
  styleUrls: ['./character-views.component.sass'],
  providers: [CharacterFilterPipe]
})
export class CharacterViewsComponent implements OnInit {
  charaktersArray!: Character[];
  @Input() searchValue!:string;
  charactersArray: any[] = [];
  user$!: Observable<firebase.User | null>;
  user: any;
  @Output() UnAuthorithated = new EventEmitter<boolean>();
  constructor(public auth: AngularFireAuth, private apiService: ApiServiceService, private router: Router) {  }

  ngOnInit(): void {
    this.apiService.getAllCharactersArray().subscribe(el=>{
      this.charactersArray = el;
    });
    this.user$ = this.auth.user;
    this.user$.subscribe(el=>{
      this.user=el;
      if(this.user !== null){
        this.UnAuthorithated.emit(true);
      }
    });
  }

  public openCard(id:number) {
    localStorage.setItem('id',JSON.stringify(id));
    if(this.user === null){
      this.UnAuthorithated.emit(true)
    }
    this.router.navigate(['/card'])
  }

}
