import { RequisitionLine } from './requisition-line.model';
import { Vendor } from './vendor.model';

export class Requisition {
    requisitionId: number;
    requisitionTitle: string;
    requisitionType: RequisitionType;
    departmentId: number;
    userId: number;
    dateRequested: Date;
    justification: string;
    status: RequisitionStatus;
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
    requisitionLines: RequisitionLine[];
    getVendorName(): string {
        console.log(this.requisitionLines[0]);
        return this.requisitionLines[0].vendorName;
    }
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
