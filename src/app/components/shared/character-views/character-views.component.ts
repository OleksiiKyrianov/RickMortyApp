import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Router } from '@angular/router';
import { CharacterFilterPipe } from 'src/app/components/shared/pipes/character-filter.pipe';

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
  constructor(private apiService: ApiServiceService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getAllCharactersArray().subscribe(el=>{
      this.charactersArray = el;
    });
  }

  public openCard(id:number) {
    localStorage.setItem('id',JSON.stringify(id));
    this.router.navigate(['/card'])
  }

}
