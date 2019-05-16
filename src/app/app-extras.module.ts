import { NgModule } from '@angular/core';

import { StacheModule } from '@blackbaud/stache';
// tslint:disable-next-line: max-line-length
import { SkyListModule, SkyListToolbarModule, SkyListPagingModule, SkyListViewChecklistModule, SkyListViewGridModule, SkyListFiltersModule, SkyInlineFormModule } from '@blackbaud/skyux-builder/src/app/sky-pages.module';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  imports: [
    StacheModule
  ],
  exports: [
    StacheModule
    ],
  providers: [],
  entryComponents: [
    SkyListModule,
    SkyListToolbarModule,
    SkyListPagingModule,
    SkyListViewChecklistModule,
    SkyListViewGridModule,
    SkyListFiltersModule,
    SkyInlineFormModule
  ]
})
export class AppExtrasModule { }
