import { Observable } from 'rxjs/Rx';
import { RequisitionLine } from '../model/requisition-line.model';
import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelectItem } from 'primeng/primeng';

import { Requisition, RequisitionStatus, RequisitionType } from '../model/requisition.model';
import { RequisitionService } from '../model/requisition.service';

@Component({
  selector: 'app-requisition-detail',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'requisition-detail.component.html'
})
export class RequisitionDetailComponent implements OnInit, OnChanges {
  @Input() requisition: Requisition;
  selectedLine: RequisitionLine;

  myForm: FormGroup;
  requestTypeOptions: SelectItem[];
  statusOptions: SelectItem[];

  constructor(
    private fb: FormBuilder,
    private requisitionService: RequisitionService
  ) {
    this.requestTypeOptions = Object.keys(RequisitionType)
                                .filter(a => a.match(/^\D/))
                                .map(label => ( { label, value: RequisitionType[label] as number }));
   this.statusOptions = Object.keys(RequisitionStatus)
                                .filter(a => a.match(/^\D/))
                                .map(label => ( { label, value: RequisitionStatus[label] as number }));

     this.myForm = this.fb.group({
      requisitionId: '',
      requisitionTitle: '',
      requisitionType: '',
      status: '',
      locationName: '',
      shipDateDisplay: '',
      total: '',
    });
  }
  onSubmit({ value, valid }: { value: any, valid: boolean }) {
    console.log(value, valid);
  }

  ngOnInit() {
    this.requisition = this.requisitionService.currentRequisition;
    (<FormGroup>this.myForm).setValue({
        requisitionId: this.requisition.requisitionId,
        requisitionTitle: this.requisition.requisitionTitle,
        requisitionType: this.requisition.requisitionType,
        status: this.requisition.statusId,
        locationName: this.requisition.locationName,
        shipDateDisplay: this.requisition.shipDateDisplay,
        total: this.requisition.total,
    });
  }

  ngOnChanges(changes: any): void {
  }

}
