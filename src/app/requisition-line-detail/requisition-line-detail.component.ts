import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { RequisitionLine } from '../model/requisition-line.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FieldsetModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-requisition-line-detail',
  templateUrl: './requisition-line-detail.component.html',
  styleUrls: ['./requisition-line-detail.component.css']
})
export class RequisitionLineDetailComponent implements OnInit, OnChanges {
  @Input() requisitionLine: RequisitionLine;
  lines: FormGroup;

  constructor(private fb: FormBuilder) {
    this.lines = this.fb.group({
      itemId: '',
      itemDescription: '',
      quantity: '',
      cost: '',
      unitOfMeasure: '',
      shipDateDisplay: ''
    })
   }
  ngOnChanges(changes: any): void {
    (<FormGroup>this.lines).setValue({
      itemId: this.requisitionLine.itemId,
      itemDescription: this.requisitionLine.itemDescription,
      quantity: this.requisitionLine.quantity,
      cost: this.requisitionLine.price,
      unitOfMeasure: this.requisitionLine.unitOfMeasure,
      shipDateDisplay: new Date(this.requisitionLine.shipDate)
    });
  }

  ngOnInit() {

  }

}
