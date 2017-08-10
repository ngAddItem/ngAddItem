import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Requisition } from '../model/requisition.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-requisition-detail',
  templateUrl: './requisition-detail.component.html',
  styleUrls: ['./requisition-detail.component.css']
})
export class RequisitionDetailComponent implements OnInit, OnChanges {

  @Input() requisition: Requisition;
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required]
    })
   }
  ngOnChanges(changes: SimpleChanges): void {
    this.myForm.setValue({
      id: this.requisition.requisitionId,
      title: this.requisition.requisitionTitle
    });
  }
  ngOnInit() {
  }

}
