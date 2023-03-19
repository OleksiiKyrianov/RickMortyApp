import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Character } from 'src/app/models/character';
import { InfoResponse } from 'src/app/models/info-response';

export interface Results{
    info: InfoResponse,
    results: Character[]
  }
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {
  searchValue:string = '';
  authBlock: boolean = false;
  formInput!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    if(JSON.parse((localStorage.getItem('search'))!) === null){
      localStorage.setItem('search', JSON.stringify(this.searchValue));
    }else{this.searchValue = JSON.parse((localStorage.getItem('search'))!);}
    this.formInput = new FormGroup({
      searchInput: new FormControl(this.searchValue,[Validators.pattern(/^[a-zA-Z0-9]*$/)] )
    })
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

  public checkAuth(auth:boolean) {
    if(auth){
    this.authBlock = auth;
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
