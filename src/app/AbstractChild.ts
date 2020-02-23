import {ChangeDetectorRef, DoCheck, Input} from '@angular/core';

export class AbstractChild implements DoCheck {

  @Input()
  set detachChangeDetection(detach: boolean) {
    if (detach) {
      this.changeDetectionDetached = detach;
      this.changeDetection.detach();
      // this.changeDetection.detectChanges();
    }
  }

  name: string;

  changeDetectionTriggered = 0;

  changeDetectionDetached: boolean;

  cd = false;

  constructor(protected changeDetection: ChangeDetectorRef, name: string) {
    this.name = name;
  }

  onClick(): void {
    console.log('Clicked: ' + this.name);
    // this.changeDetection.detectChanges();
  }

  ngDoCheck() {
    // console.log('ngDoCheck: ' + this.name);
  }

}
