import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnInit} from '@angular/core';
import {AbstractChild} from '../AbstractChild';

@Component({
  selector: 'app-child12',
  templateUrl: '../AbstractChildTemplate.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child12Component extends AbstractChild implements OnInit {

  @Input()
  value: string;

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
