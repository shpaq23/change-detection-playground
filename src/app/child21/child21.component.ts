import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AbstractChild} from '../AbstractChild';

@Component({
  selector: 'app-child21',
  templateUrl: '../AbstractChildTemplate.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child21Component extends AbstractChild implements OnInit {

  constructor(cd: ChangeDetectorRef) {
    super(cd, 'C2C1');
  }

  ngOnInit() {
  }

}
