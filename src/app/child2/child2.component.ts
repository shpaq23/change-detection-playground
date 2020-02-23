import {ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';
import {AbstractChild} from '../AbstractChild';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component extends AbstractChild implements OnInit {

  constructor(cd: ChangeDetectorRef, private ngZone: NgZone) {
    super(cd, 'C2');
    // this.ngZone.runOutsideAngular(() => {
    //   setTimeout(() => {
    //     this.changeDetection.checkNoChanges();
    //     console.log('checkNoChanges');
    //   }, 1000);
    // });
    // setTimeout(() => this.changeDetection.reattach(), 2500);
  }

  ngOnInit() {
  }

  onClick(): void {
    super.onClick();
    // this.changeDetection.markForCheck();
  }

}
