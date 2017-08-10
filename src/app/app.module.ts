import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RequisitionService } from './model/requisition.service';
import { FieldsetModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import { RequisitionComponent } from './requisition/requisition.component';
import { DataTableModule } from 'primeng/primeng';
import { RequisitionDetailComponent } from './requisition-detail/requisition-detail.component';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

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
    FieldsetModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [RequisitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
