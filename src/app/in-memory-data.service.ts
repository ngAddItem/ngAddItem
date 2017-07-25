import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { RequisitionType, RequisitionStatus } from './model/requisition.model';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb(): {} {
    const requisitions = [
      {
        requisitionId: 10001,
        requisitionTitle: 'My First Requisition',
        requisitionType: RequisitionType.Requisition,
        departmentId: 2,
        userId: 1024,
        dateRequested: null,
        justification: '',
        status: RequisitionStatus.Incomplete,
        projectNumber: '00-195',
        companyId: 2,
        locationName: 'Seattle Warehouse 1',
        notes: 'N/A',
        locationId: 12,
        shipMethodId: 9,
        requestTypeId: 1,
        invoiceNumber: '',
        invoiceDate: null,
        billToLocationId: 1,
        requisitionLines: [{
                            requisitionId: 1,
                            requisitionLineId: 1,
                            glAccountId: '1030',
                            glAccountDescription: 'Account Description',
                            price: 19.95,
                            quantity: 10,
                            taxRate: 0,
                            taxAmount: 0,
                            taxSchedule: '',
                            taxClass: '',
                            unitOfMeasure: 'Each',
                            itemId: 'Item0001',
                            itemDescription: 'My First Item',
                            vendorItemId: '',
                            projectNumber: '',
                            projectDescription: '',
                            listed: true,
                            companyId: 2,
                            targetCompany: '',
                            locationId: 0,
                            shipDate: null,
                            vendorId: '99',
                            vendorName: 'Amazon',
                            vendorClassId: '',
                            paymentTermsId: '',
                        }]
      },
      {
        requisitionId: 10002,
        requisitionTitle: 'My Second Requisition',
        requisitionType: RequisitionType.Requisition,
        departmentId: 2,
        userId: 1024,
        dateRequested: null,
        justification: '',
        status: RequisitionStatus.Incomplete,
        projectNumber: '00-195',
        companyId: 2,
        locationName: 'Seattle Warehouse 2',
        notes: 'N/A',
        locationId: 12,
        shipMethodId: 9,
        requestTypeId: 1,
        invoiceNumber: '',
        invoiceDate: null,
        billToLocationId: 1,
        requisitionLines: [{
                    requisitionId: 1,
                    requisitionLineId: 1,
                    glAccountId: '1030',
                    glAccountDescription: 'Account Description',
                    price: 19.95,
                    quantity: 10,
                    taxRate: 0,
                    taxAmount: 0,
                    taxSchedule: '',
                    taxClass: '',
                    unitOfMeasure: 'Each',
                    itemId: 'Item0001',
                    itemDescription: 'My First Item',
                    vendorItemId: '',
                    projectNumber: '',
                    projectDescription: '',
                    listed: true,
                    companyId: 2,
                    targetCompany: '',
                    locationId: 0,
                    shipDate: null,
                    vendorId: '99',
                    vendorName: 'Amazon',
                    vendorClassId: '',
                    paymentTermsId: '',
                }]
      },
    ];
    return {requisitions};
  }

  constructor() { }

}
