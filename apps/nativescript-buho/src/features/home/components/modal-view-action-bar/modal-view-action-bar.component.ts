import { Component } from '@angular/core';

import { BaseComponent } from '@time/core';

@Component({
  moduleId: module.id,
  selector: 'time-modal-view-action-bar',
  templateUrl: './modal-view-action-bar.component.html',
})
export class ModalViewActionBarComponent extends BaseComponent {
  constructor() {
    super();
  }

  ngOnInit() {
    console.log(
      'ModalViewActionBarComponent does init, but it crashes on iOS.'
    );
  }
}
