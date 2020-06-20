import { Component } from '@angular/core';

// libs
import { BaseComponent } from '@time/core';
import { AppService } from '@time/nativescript/core';

export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
