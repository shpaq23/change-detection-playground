import {ChangeDetectorRef, Component, DoCheck, OnInit} from '@angular/core';
import {AbstractChild} from '../AbstractChild';

@Component({
  selector: 'app-child12',
  templateUrl: '../AbstractChildTemplate.html'
})
export class Child12Component extends AbstractChild implements OnInit {

  constructor(cd: ChangeDetectorRef) {
    super(cd, 'C1C2');
  }

  ngOnInit() {
  }

  onClick(): void {
    super.onClick();
    // this.changeDetection.detectChanges();
  }

}
