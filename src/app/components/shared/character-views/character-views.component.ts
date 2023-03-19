import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Character } from 'src/app/models/character';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Router } from '@angular/router';
import { CharacterFilterPipe } from 'src/app/components/shared/pipes/character-filter.pipe';
import { Observable, catchError, of, switchMap, Subscription } from 'rxjs';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LogicGetService } from 'src/app/services/logic-get.service';

@Component({
  selector: 'app-character-views',
  templateUrl: './character-views.component.html',
  styleUrls: ['./character-views.component.sass'],
  providers: [CharacterFilterPipe],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterViewsComponent implements OnInit, OnChanges, OnDestroy {
  charaktersArray!: Character[];
  @Input() searchValue!:string;
  pagination: boolean = false;
  countOfPage: number = 1;
  totalPages: number = 0;
  charactersArray: any[] = [];
  user$!: Observable<firebase.User | null>;
  user: any;
  errorText: string = 'Loading...';
  errorFlag:boolean = false;
  subscr!: Subscription;
  userSubscr!: Subscription;
  @Output() UnAuthorithated = new EventEmitter<boolean>();
  constructor(public auth: AngularFireAuth, private apiService: ApiServiceService, private router: Router, private logicGetService: LogicGetService, private cdr: ChangeDetectorRef) {  }

  ngOnInit(): void {
    this.subscr = this.logicGetService.getSelectedValue().subscribe(value=> {
      if(value === 'getAll'){
        this.pagination = false;
        this.getAllLogic();
      }
      if(value === 'selectPagination'){
        this.pagination = true;
        if (localStorage.getItem('page')){
          this.countOfPage = JSON.parse((localStorage.getItem('page'))!);
        }
        this.paginationLogic(this.countOfPage);
      }
    })
    this.user$ = this.auth.user;
    this.userSubscr = this.user$.subscribe(el=>{
      this.user=el;
      if(this.user !== null){
        this.UnAuthorithated.emit(true);
      }
    });
  }
  private getAllLogic(): Character[]{
    this.apiService.getAllCharactersArray().subscribe(el=>{
      this.charactersArray = el;
      this.cdr.detectChanges();
    });
    return this.charactersArray;
  }
  public paginationLogic(page:number): Character[]{
    this.countOfPage = page;
    this.apiService.getAllCharacters(page, this.searchValue).pipe(
        switchMap(el => {
          if (el !== null) {
            this.errorFlag = false;
            this.totalPages = el.info.pages;
            this.charactersArray = this.apiService.sortCharacters(el.results);
            this.cdr.detectChanges();
          }
          return of(null);
        }),
        catchError(err => {
          if(err){
            this.errorText = 'Nothing found...';
            this.errorFlag =true;
          }
          return of(null);
        })).subscribe();
      return this.charactersArray;
  }

  public openCard(id:number) {
    localStorage.setItem('id',JSON.stringify(id));
    if(this.user === null){
      this.UnAuthorithated.emit(true)
    }
    localStorage.setItem('page', JSON.stringify(this.countOfPage));
    this.router.navigate(['/card'])
  }

  public prevPage() {
    if(this.countOfPage === 1){
      return
    }
    this.countOfPage--;
    localStorage.setItem('page', JSON.stringify(this.countOfPage));
    this.paginationLogic(this.countOfPage);
  }

  public nextPage() {
    if(this.countOfPage === this.totalPages){
      return
    }
    this.countOfPage++;
    localStorage.setItem('page', JSON.stringify(this.countOfPage));
    this.paginationLogic(this.countOfPage);
  }

  public ngOnChanges(changes: SimpleChanges) {
    if(this.pagination && this.searchValue || this.searchValue === ''){
      this.paginationLogic(1)
    }
    if(!this.pagination && this.searchValue){
      this.getAllLogic();
    }
  }

  public ngOnDestroy() {
    this.subscr.unsubscribe();
    this.userSubscr.unsubscribe();
  }
}
