import {ApplicationRef, ChangeDetectorRef, Injectable, NgZone} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CdrService {

  constructor(private cdr: ApplicationRef, private ngZone: NgZone) {
    console.log('cdrService constructor');
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.cdr.tick();
        // this.cdr.detectChanges();
        console.log('after 3s detect Changes');
      }, 3000);
    });

  }

}
