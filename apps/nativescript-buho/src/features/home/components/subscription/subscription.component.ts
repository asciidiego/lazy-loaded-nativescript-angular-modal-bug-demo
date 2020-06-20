import { Component } from '@angular/core';

import { BaseComponent } from '@time/core';

@Component({
  moduleId: module.id,
  selector: 'time-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent extends BaseComponent {
  constructor() {
    super();
  }
}
