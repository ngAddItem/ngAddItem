import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { RequisitionType, RequisitionStatus } from './model/requisition.model';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb(): {} {
    const requisitions = [
      {
        requisitionId: 1,
        requisitionTitle: 'My sdfg Requisition',
        requisitionType: RequisitionType.Requisition,
        departmentId: 2,
        userId: 1024,
        dateRequested: null,
        justification: '',
        status: RequisitionStatus.Incomplete,
        projectNumber: '00-195',
        companyId: 2,
        locationName: 'Warehouse 1',
        notes: 'N/A',
        locationId: 12,
        shipMethodId: 9,
        requestTypeId: 1,
        invoiceNumber: '',
        invoiceDate: null,
        billToLocationId: 1
      },
      {
        requisitionId: 1,
        requisitionTitle: 'My 2 Requisition',
        requisitionType: RequisitionType.Requisition,
        departmentId: 2,
        userId: 1024,
        dateRequested: null,
        justification: '',
        status: RequisitionStatus.Incomplete,
        projectNumber: '00-195',
        companyId: 2,
        locationName: 'Warehouse 1',
        notes: 'N/A',
        locationId: 12,
        shipMethodId: 9,
        requestTypeId: 1,
        invoiceNumber: '',
        invoiceDate: null,
        billToLocationId: 1
      },
    ];
    return {requisitions};
  }

  constructor() { }

}
