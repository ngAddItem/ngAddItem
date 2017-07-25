import { Component, OnInit } from '@angular/core';
import { Requisition } from './model/requisition.model';
import { RequisitionService } from './model/requisition.service';

import { GridOptions } from 'ag-grid/main';
import {RedComponentComponent} from './red-component/red-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  requisitions: Requisition[];
  gridOptions: GridOptions;
  columnDefs: any[];
  rowData: any[];
  results: Requisition[];

  ngOnInit(): void {
    this.requistionService.getRequisitions().then(response => this.requisitions = response)
    .then(data => this.rowData = this.requisitions);

  }
  constructor(private requistionService: RequisitionService) {
        this.gridOptions = <GridOptions>{};

        this.columnDefs = [
            {headerName: 'Requisition ID', field: 'requisitionId'},
            {headerName: 'Title', field: 'requisitionTitle', cellRendererFramework: RedComponentComponent},
            {headerName: 'Location', field: 'locationName'},
            {headerName: 'Project', field: 'projectNumber'},
            {headerName: 'Vendor', field: 'requisitionLines[0].vendorName'},
        ];
// Requisition #
// Vendor
// Title
// RequestType
// status
// Approver
// Date Created
// Invoice Date
// Ship Date
// Total

    }
    onGridReady(params) {
        params.api.sizeColumnsToFit();
    }

    selectAllRows() {
        this.gridOptions.api.selectAll();
    }
}
