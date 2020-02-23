import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'parent';

  changeDetectionTriggered = 0;

  constructor(private changeDetectionRef: ChangeDetectorRef) {
    // console.log(ChangeDetectionStrategy);
  }

  ngOnInit(): void {
    // this.changeDetectionRef.detach();
    // this.changeDetectionRef.detectChanges();
  }

  onClick(): void {
    console.log('Clicked: ' + this.title);
    // this.changeDetectionRef.detectChanges();
  }
}
