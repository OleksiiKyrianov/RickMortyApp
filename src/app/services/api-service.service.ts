import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { InfoResponse } from 'src/app/models/info-response';
import { Character } from 'src/app/models/character';

interface Response{
  info: InfoResponse,
  results: Character[]
}
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getAllCharacters(){
    return this.http.get(environment.rickandmortyApi)
  }

  getCharacterById(id:string){
    return this.http.get(environment.rickandmortyApi + '/'+id);
  }

  getAllCharactersArray(): Observable<Character[]> {
    const allCharacters: Character[] = [];
    const buffer: Character[] = [];
    const getAllPages = (url:string) => {
      return this.http.get<Response>(url).subscribe(data => {
        const characters = data.results;
        let loadComleteFlag: boolean = false;
        if (data.info.next !== null) {
          getAllPages(data.info.next);
        }else {
          loadComleteFlag = true;
        }
        buffer.push(...characters);
        if(loadComleteFlag){
          this.sortCharacters(buffer);
          allCharacters.push(...buffer)
        }
      });
    };
    getAllPages(environment.rickandmortyApi);
      return new Observable(observer => observer.next(allCharacters));
  }
  sortCharacters(charactersArray:Character[]){
    charactersArray.sort((a, b) => a.name.localeCompare(b.name));
  }
}
