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

export const requisitions: Requisition[] = [
  {
    requisitionId: 1,
    requisitionTitle: 'My First Requisition',
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
