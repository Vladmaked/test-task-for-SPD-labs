import { NgModule } from '@angular/core';

import { NgxWebstorageModule } from 'ngx-webstorage';

import { environment } from '@config/environment';

@NgModule({
  imports: [
    NgxWebstorageModule.forRoot(
      { prefix: environment.prefix }
    )
  ]
})
export class StorageModule {}
