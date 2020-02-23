import {ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';
import {AbstractChild} from '../AbstractChild';

@Component({
  selector: 'app-child122',
  templateUrl: '../AbstractChildTemplate.html'
})
export class Child122Component extends AbstractChild implements OnInit {

  constructor(cd: ChangeDetectorRef, private ngZone: NgZone) {
    super(cd, 'C1C2C2');
    // this.ngZone.runOutsideAngular(() => {
    //   setTimeout(() => {
    //    this.name = 'i changed my name !!!!';
    //   }, 500);
    // });
    // setInterval(() => this.changeDetection.detectChanges(), 2000);

  }

  ngOnInit() {
  }

}
