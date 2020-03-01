import {ApplicationRef, ChangeDetectorRef, Component, EventEmitter, Input, NgZone, OnInit, Output} from '@angular/core';
import {AbstractChild} from '../AbstractChild';

@Component({
  selector: 'app-child122',
  templateUrl: '../AbstractChildTemplate.html'
})
export class Child122Component extends AbstractChild implements OnInit {

  @Input()
  value: string;

  @Output()
  outputValue = new EventEmitter<string>();

  constructor(cd: ChangeDetectorRef, private ngZone: NgZone, private applicationRef: ApplicationRef) {
    super(cd, 'C1C2C2');
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.outputValue.emit('value from C1C2C2');
        this.applicationRef.tick();
      }, 3000);
    });
    // setInterval(() => this.changeDetection.detectChanges(), 2000);

  }

  ngOnInit() {
  }

  onClick(): void {
    super.onClick();
    this.outputValue.emit('value from C1C2C2');
  }

}
