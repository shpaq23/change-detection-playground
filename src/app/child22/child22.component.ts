import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit} from '@angular/core';
import {AbstractChild} from '../AbstractChild';

@Component({
  selector: 'app-child22',
  templateUrl: './child22.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child22Component extends AbstractChild implements OnInit {

  constructor(cd: ChangeDetectorRef) {
    super(cd, 'C2C2');
  }

  ngOnInit() {
  }

}
