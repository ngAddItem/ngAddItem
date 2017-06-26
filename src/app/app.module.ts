import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RequisitionComponent } from './requisition/requisition.component';
import { VendorComponent } from './vendor/vendor.component';
import { ItemComponent } from './item/item.component';
import { GlAccountComponent } from './gl-account/gl-account.component';
import { ProjectComponent } from './project/project.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
