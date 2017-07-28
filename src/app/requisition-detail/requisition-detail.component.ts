import { Component, OnInit, Input } from '@angular/core';
import { Requisition } from '../model/requisition.model';

@Component({
  selector: 'app-requisition-detail',
  templateUrl: './requisition-detail.component.html',
  styleUrls: ['./requisition-detail.component.css']
})
export class RequisitionDetailComponent implements OnInit {
  @Input() requisition: Requisition;

  constructor() { }

  ngOnInit() {
  }

}
