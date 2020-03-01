import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, ComponentRef,
  DoCheck,
  NgZone,
  OnChanges,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import {AbstractChild} from '../AbstractChild';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child1Component extends AbstractChild implements OnInit, DoCheck, AfterViewInit {

  constructor(cd: ChangeDetectorRef,
              private ngZone: NgZone,
              private vcr: ViewContainerRef) {
    super(cd, 'C1');
    // this.changeDetection.reattach();
    // this.ngZone.runOutsideAngular(() => {
    //   setTimeout( () => this.changeDetection.detach());
      // setInterval(() => this.changeDetection.markForCheck(), 500);
    // });

  }

  ngOnInit() {
  }

  ngDoCheck() {
    // console.log('doCheck');
  }
  ngAfterViewInit() {
       this.name = 'i changed my name !!!!';
  }


  onClick(): void {
    super.onClick();
    // this.changeDetection.reattach();
    // this.ngZone.runOutsideAngular(() => {
    //   setTimeout( () => this.changeDetection.reattach());
    // });
  }
}
