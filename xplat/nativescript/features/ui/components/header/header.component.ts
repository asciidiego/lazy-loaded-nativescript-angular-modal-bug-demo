import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

import { HeaderBaseComponent } from '@time/features';

@Component({
  moduleId: module.id,
  selector: 'time-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent extends HeaderBaseComponent {
  constructor(private router: RouterExtensions) {
    super();
  }
}
