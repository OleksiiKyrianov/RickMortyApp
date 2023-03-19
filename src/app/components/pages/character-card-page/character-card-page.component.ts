import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Character } from 'src/app/models/character';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character-card-page',
  templateUrl: './character-card-page.component.html',
  styleUrls: ['./character-card-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCardPageComponent implements OnInit, OnDestroy {
  id!: number;
  card!: Character;
  subscr!: Subscription;
  constructor(private apiService: ApiServiceService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.subscr = this.apiService.getCharacterById(JSON.parse((localStorage.getItem('id'))!)).subscribe(el=>{
      this.card = el;
      this.cdr.detectChanges();
    });
  }

  public ngOnDestroy() {
    this.subscr.unsubscribe();
  }
}
