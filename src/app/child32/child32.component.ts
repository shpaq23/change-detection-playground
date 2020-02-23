import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AbstractChild} from '../AbstractChild';

@Component({
  selector: 'app-child32',
  templateUrl: '../AbstractChildTemplate.html'
})
export class Child32Component extends AbstractChild implements OnInit {

  constructor(cd: ChangeDetectorRef) {
    super(cd, 'C3C2');
  }

  ngOnInit() {
  }

}
