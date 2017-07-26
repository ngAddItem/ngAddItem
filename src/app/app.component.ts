import { Component, OnInit } from '@angular/core';
import { Requisition } from './model/requisition.model';
import { User } from './model/user.model';

import { RequisitionService } from './model/requisition.service';
import { Type, plainToClass } from 'class-transformer';
import { GridOptions } from 'ag-grid/main';
import { RedComponentComponent } from './red-component/red-component.component';

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
  requisition: Requisition;

  ngOnInit(): void {
      this.requisitions = new Array<Requisition>();
      this.requisition = new Requisition();
    //   this.requistionService.getRequisitions().then(response => this.requisitions = plainToClass(Requisition, response))
    //     .then(data => this.rowData = this.requisitions)
    //     .then(log => console.log(this.requisitions)
    //     );

    this.requistionService.getReqsWithUser().subscribe(response => this.rowData = plainToClass(Requisition, response));

  }
  constructor(private requistionService: RequisitionService) {
        this.gridOptions = <GridOptions>{};

        this.columnDefs = [
            {headerName: 'Requisition #', field: 'requisitionId'},
            {headerName: 'Name', field: 'requisitionTitle', cellRendererFramework: RedComponentComponent},
            {headerName: 'Type', field: 'requisitionTypeName'},
            {headerName: 'Status', field: 'statusName'},
            {headerName: 'User', field: 'user', cellRenderer: this.UserCellRenderer},
            {headerName: 'Location', field: 'locationName'},
            {headerName: 'Project', field: 'projectNumber'},
            {headerName: 'Ship', field: 'shipDate', cellRenderer: this.DateCellRenderer},
            {headerName: 'Total', field: 'total', cellRenderer: this.CurrencyCellRenderer},
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
    private CurrencyCellRenderer(params: any) {
        const result = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2});
        return result.format(params.value);
    }
    private DateCellRenderer(params: any) {
        return new Date(params.value);
    }
    private UserCellRenderer(params: any) {
        return params.value[0].userName;
    }
    onGridReady(params) {
        params.api.sizeColumnsToFit();
    }

    selectAllRows() {
        this.gridOptions.api.selectAll();
    }
}
