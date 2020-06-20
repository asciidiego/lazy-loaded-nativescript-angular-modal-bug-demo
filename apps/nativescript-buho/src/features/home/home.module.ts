import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { Routes } from '@angular/router';
import {
  NativeScriptRouterModule,
  ModalDialogService,
} from '@nativescript/angular';

import { SharedModule } from '../shared/shared.module';
import { HOME_COMPONENTS, HomeComponent } from './components';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forChild(routes)],
  declarations: [...HOME_COMPONENTS],
  exports: [HomeComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  providers: [ModalDialogService],
})
export class HomeModule {}
