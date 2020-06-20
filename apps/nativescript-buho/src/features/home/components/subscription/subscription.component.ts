import { Component } from '@angular/core';

import { BaseComponent } from '@time/core';

@Component({
  moduleId: module.id,
  selector: 'time-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent extends BaseComponent {
  title = '';
  constructor() {
    super();
  }

  onSetSubscription(): void {
    console.log(`Subscription saved! [${this.title}]`);
  }
}
