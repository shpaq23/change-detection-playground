import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  @Input()
  name: string;

  @Input()
  set detachChangeDetection(detach: boolean) {
    if (detach) {
      this.changeDetectionDetached = detach;
      this.changeDetection.detach();
      this.changeDetection.detectChanges();
    }
  }

  changeDetectionTriggered = 0;

  changeDetectionDetached: boolean;

  constructor(private changeDetection: ChangeDetectorRef) {
  }

  ngOnInit() {
    // this.changeDetection.detach();
  }

  onClick(): void {
    console.log('Clicked: ' + this.name);
    if (this.changeDetectionDetached) {
      this.changeDetection.detectChanges();
    }
  }


}
