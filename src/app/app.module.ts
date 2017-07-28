import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RequisitionService } from './model/requisition.service';

import { AppComponent } from './app.component';
import { RequisitionComponent } from './requisition/requisition.component';
import { DataTableModule } from 'primeng/primeng';
import { RequisitionDetailComponent } from './requisition-detail/requisition-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RequisitionComponent,
    RequisitionDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DataTableModule,
  ],
  providers: [RequisitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
