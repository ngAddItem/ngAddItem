import { RequisitionLine } from './requisition-line.model';
import { Vendor } from './vendor.model';
import { User } from './user.model';

import { Expose } from 'class-transformer';
export class Requisition {
    requisitionId: number;
    requisitionTitle: string;
    departmentId: number;
    userId: number;
    user: User;
    dateRequested: Date;
    justification: string;
    statusId: number;
    projectNumber: string;
    companyId: number;
    locationName: string;
    notes: string;
    locationId: number;
    shipMethodId: number;
    requestTypeId: number;
    invoiceNumber: string;
    invoiceDate: Date;
    billToLocationId: number;
    private requisitionType: number;
    @Expose()
    get statusName(): string {
        return RequisitionStatus[this.statusId];
    }
    @Expose()
    get shipDate(): Date {
        // console.log('ship date: ' + this.requisitionLines[0].shipDate);
        return this.requisitionLines[0].shipDate;
    }
    @Expose()
    get requisitionTypeName(): string {
        console.log(this.requisitionType);
        return RequisitionType[this.requisitionType];
    }
    @Expose()
    get total(): number {
        return this.requisitionLines.reduce((p, n) => p + n.price, 0);
    }
    requisitionLines: RequisitionLine[];
}

export enum RequisitionType {
    Unknown = 0,
    Requisition = 1,
    ChangeOrder = 2,
    Blanket = 3,
    BPOChild = 4,
    PaymentRequest = 5,
    SalesOrder = 6,
    BlanketChangeOrder = 7,
    BPOChildChangeOrder = 8,
    StockRequest = 9,
    PrepaidPORequest = 10,
    PrepaidPOBlanketRelease = 11,
    OpenEndedPO = 12,
    ChangeStockRequest = 13,
    TravelAuthorizationRequest = 14,
    RouteForApprovalOnly = 15,
    ExpenseRequest = 16,
    MasterPORequest = 17,
    PaymentApprovalOnly = 18,
    APBatchApproval = 19
}

export enum RequisitionStatus {
    Incomplete = 0,
    Unsubmitted = 1,
    Cancelled = 2,
    Rejected = 3,
    Waiting = 4 ,
    RequestInfo = 5,
    Approved = 6,
    Posted = 7,
    PartiallyReceived = 8,
    Closed = 9,
    RequireChange = 10,
    ResubmittedPostApproval = 11,
    ApprovedEdited = 12,
    FullyReceived = 13,
    PostedOnHold = 14
}
