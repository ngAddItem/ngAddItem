import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RequisitionService } from './model/requisition.service';
import { AppComponent } from './app.component';
// eRequester framework
import { RequisitionComponent } from './requisition/requisition.component';
import { VendorComponent } from './vendor/vendor.component';
import { ItemComponent } from './item/item.component';
import { GlAccountComponent } from './gl-account/gl-account.component';
import { ProjectComponent } from './project/project.component';
// In-Memory-API
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';
// ag-Grid
import {AgGridModule} from 'ag-grid-angular/main';
import { RedComponentComponent } from './red-component/red-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RequisitionComponent,
    VendorComponent,
    ItemComponent,
    GlAccountComponent,
    ProjectComponent,
    RedComponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AgGridModule.withComponents([RedComponentComponent]),
    // InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [RequisitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
