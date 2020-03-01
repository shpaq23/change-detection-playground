import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractChild} from '../AbstractChild';

@Component({
  selector: 'app-child22',
  templateUrl: './child22.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child22Component extends AbstractChild implements OnInit {

  @Input()
  value: string;

  @Output()
  outputValue = new EventEmitter<string>();

  constructor(cd: ChangeDetectorRef) {
    super(cd, 'C2C2');
  }

  ngOnInit() {
  }

  onClick(): void {
    super.onClick();
    this.outputValue.emit('value from C2C2');
  }

}
