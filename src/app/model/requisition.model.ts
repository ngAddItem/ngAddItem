import { Observable } from 'rxjs/Rx';
import { Expose } from 'class-transformer';
import { RequisitionLine } from './requisition-line.model';

export class Requisition {
    requisitionId: number;
    requisitionTitle: string;
    requisitionType: RequisitionType;
    departmentId: number;
    userId: number;
    dateRequested: Date;
    justification: string;
    status: RequisitionStatus;
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
    @Expose()
    get statusName(): string {
        return RequisitionStatus[this.statusId];
    }
    @Expose()
    get shipDateDisplay(): string {
        return (this.requisitionLines.length) ? new Date(this.requisitionLines[0].shipDate).toLocaleDateString() : 'none';
    }
    @Expose()
    get requisitionTypeName(): string {
        return RequisitionType[this.requisitionType];
    }
    @Expose()
    get total(): Observable<RequisitionLine> {
        return Observable.from(this.requisitionLines);
    }
    requisitionLines: RequisitionLine[]
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

