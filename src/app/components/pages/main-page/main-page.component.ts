import { Component, OnInit } from '@angular/core';
  export interface Results{
    info: any;
    results: any[]
  }
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass'],
})
export class MainPageComponent implements OnInit {
  searchValue:string = '';
  authBlock: boolean = false;
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
