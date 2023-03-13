import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Router } from '@angular/router';
import { CharacterFilterPipe } from 'src/app/components/shared/pipes/character-filter.pipe';
  export interface Results{
    info: any;
    results: any[]
  }
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass'],
  providers: [CharacterFilterPipe]
})
export class MainPageComponent implements OnInit {
  charactersArray: any[] = [];
  searchValue:string = '';
  constructor() { }

  ngOnInit(): void {
    this.searchValue = JSON.parse((localStorage.getItem('search'))!);
  }


  public setSearchValue(event: Event) {
    const input = event.target as HTMLInputElement
    this.searchValue = input.value;
    localStorage.setItem('search', JSON.stringify(this.searchValue))
  }

  public clearSearch() {
    this.searchValue = '';
    localStorage.setItem('search', JSON.stringify(this.searchValue));
  }
}
