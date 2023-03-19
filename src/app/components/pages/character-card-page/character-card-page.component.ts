import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-character-card-page',
  templateUrl: './character-card-page.component.html',
  styleUrls: ['./character-card-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCardPageComponent implements OnInit {
  id!: number;
  card!: Character;
  constructor(private apiService: ApiServiceService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.apiService.getCharacterById(JSON.parse((localStorage.getItem('id'))!)).subscribe(el=>{
      this.card = el;
      this.cdr.detectChanges();
    });
  }
}
