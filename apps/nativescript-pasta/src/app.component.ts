import { Component } from '@angular/core';

// libs
import { AppBaseComponent, AppService } from '@time/nativescript';

@Component({
  selector: 'time-root',
  template: `
     <page-router-outlet></page-router-outlet>
  `
})
export class AppComponent extends AppBaseComponent {
  constructor(appService: AppService) {
    super(appService);
  }
}
