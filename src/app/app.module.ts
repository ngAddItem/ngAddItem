import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {
    ButtonModule,
    CalendarModule,
    DataTableModule,
    DropdownModule,
    FieldsetModule,
    InputTextareaModule,
    InputTextModule,
    SpinnerModule,
    TabViewModule,
} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { RequisitionService } from './model/requisition.service';
import { RequisitionDetailComponent } from './requisition-detail/requisition-detail.component';
import { RequisitionDashboardComponent } from './requisition-dashboard/requisition-dashboard.component';
import { RequisitionLineDetailComponent } from './requisition-line-detail/requisition-line-detail.component';

export const ROUTES: Routes = [
  { path: '', component: RequisitionDashboardComponent },
  { path: 'requisition/detail', component: RequisitionDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RequisitionDetailComponent,
    RequisitionLineDetailComponent,
    RequisitionDashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DataTableModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    InputTextareaModule,
    FieldsetModule,
    DropdownModule,
    CalendarModule,
    SpinnerModule,
    ButtonModule,
    TabViewModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [RequisitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
