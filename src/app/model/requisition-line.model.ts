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
export const requisitionLines: RequisitionLine[] = [
{
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
},
];
