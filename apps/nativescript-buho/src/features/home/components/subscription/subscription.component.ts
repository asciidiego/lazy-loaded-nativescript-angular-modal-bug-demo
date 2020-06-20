import { Component, ViewContainerRef } from '@angular/core';

import { BaseComponent } from '@time/core';
import { ModalDialogService, ModalDialogOptions } from '@nativescript/angular';
import { ModalRootComponent } from '../modal-root/modal-root.component';

@Component({
  moduleId: module.id,
  selector: 'time-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent extends BaseComponent {
  constructor(
    private _modalService: ModalDialogService,
    private _vcRef: ViewContainerRef
  ) {
    super();
  }

  ngOnInit(): void {}

  onTap(): void {
    const options: ModalDialogOptions = {
      viewContainerRef: this._vcRef,
      context: {},
      animated: true,
      ios: {
        presentationStyle: UIModalPresentationStyle.PageSheet,
      },
    };

    this._modalService
      .showModal(ModalRootComponent, options)
      .then((result: string) => {
        console.log(result);
      });
  }
}
