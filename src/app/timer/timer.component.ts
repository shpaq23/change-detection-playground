import {AfterViewChecked, Component, NgZone, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, AfterViewChecked {

  private _time: number;

  constructor(zone: NgZone, private parent: AppComponent) {
    this._time = Date.now();
    zone.runOutsideAngular(() => {
      setInterval(() => {
        this._time = Date.now();
      }, 1);
    });
  }

  ngOnInit() {

    this.parent.title = 'updated';
  }
  ngAfterViewChecked() {
  }

  get time() {
    return this._time;
  }

}
