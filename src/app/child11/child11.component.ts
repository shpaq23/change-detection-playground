import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AbstractChild} from '../AbstractChild';

@Component({
  selector: 'app-child11',
  templateUrl: '../AbstractChildTemplate.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child11Component extends AbstractChild implements OnInit {

  constructor(cd: ChangeDetectorRef) {
    super(cd, 'C1C1');
  }

  ngOnInit() {
  }

}
