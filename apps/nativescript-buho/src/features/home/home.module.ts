import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { SharedModule } from '../shared/shared.module';
import {
  HOME_COMPONENTS,
  HomeComponent,
  ModalViewActionBarComponent,
} from './components';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: HomeComponent,
        children: [
          {
            path: 'modal-view',
            component: ModalViewActionBarComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forChild(routes)],
  declarations: [...HOME_COMPONENTS],
  exports: [HomeComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
