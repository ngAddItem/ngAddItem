export class RequisitionLine {
    requisitionLineId: number;
    requisitionId: number;
    glAccountId: string;
    glAccountDescription: string;
    price: number;
    quantity: number;
    taxRate: number;
    taxAmount: number;
    taxSchedule: string;
    taxClass: string;
    unitOfMeasure: string;
    itemId: string;
    itemDescription: string;
    vendorItemId: string;
    projectNumber: string;
    projectDescription: string;
    listed: boolean;
    companyId: number;
    targetCompany: string;
    locationId: number;
    shipDate: Date;
    vendorId: string;
    vendorName: string;
    vendorClassId: string;
    paymentTermsId: string;
}

