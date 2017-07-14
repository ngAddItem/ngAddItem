import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RequisitionService } from './model/requisition.service';

import { AppComponent } from './app.component';
import { RequisitionComponent } from './requisition/requisition.component';
import { VendorComponent } from './vendor/vendor.component';
import { ItemComponent } from './item/item.component';
import { GlAccountComponent } from './gl-account/gl-account.component';
import { ProjectComponent } from './project/project.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    RequisitionComponent,
    VendorComponent,
    ItemComponent,
    GlAccountComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [RequisitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
