import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryBackComponent } from './history-back.component';

describe('HistoryBackComponent', () => {
  let component: HistoryBackComponent;
  let fixture: ComponentFixture<HistoryBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
