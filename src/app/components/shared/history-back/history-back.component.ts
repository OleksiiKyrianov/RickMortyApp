import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-back',
  templateUrl: './history-back.component.html',
  styleUrls: ['./history-back.component.sass']
})
export class HistoryBackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public historyBack() {
    history.back();
  }
}
