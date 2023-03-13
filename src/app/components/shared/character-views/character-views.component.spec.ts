import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterViewsComponent } from './character-views.component';

describe('CharacterViewsComponent', () => {
  let component: CharacterViewsComponent;
  let fixture: ComponentFixture<CharacterViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterViewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
