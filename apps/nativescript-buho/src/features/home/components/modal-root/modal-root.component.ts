import { Component } from '@angular/core';

import { BaseComponent } from '@time/core';
import { RouterExtensions } from '@nativescript/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'time-modal-root',
  templateUrl: './modal-root.component.html',
})
export class ModalRootComponent extends BaseComponent {
  constructor(
    private _routerExtensions: RouterExtensions,
    private _activeRoute: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    this._routerExtensions
      .navigate(['modal-view'], {
        relativeTo: this._activeRoute,
      })
      .then((result) => console.log(result))
      .catch((err) => console.error(err));
  }
}
