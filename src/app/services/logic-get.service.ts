import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogicGetService {
  private selectedLogic$ = new BehaviorSubject<string>('selectPagination');
  constructor() { }

  getSelectedValue() {
    return this.selectedLogic$.asObservable();
  }

  setSelectedValue(value: string) {
    this.selectedLogic$.next(value);
  }

}
