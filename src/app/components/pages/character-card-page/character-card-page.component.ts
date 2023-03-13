import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-character-card-page',
  templateUrl: './character-card-page.component.html',
  styleUrls: ['./character-card-page.component.sass']
})
export class CharacterCardPageComponent implements OnInit {
  id: any = 2 ;
  card!: any;
  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.getCharacterById(JSON.parse((localStorage.getItem('id'))!)).subscribe(el=>{
      this.card = el;
    });
  }
}
