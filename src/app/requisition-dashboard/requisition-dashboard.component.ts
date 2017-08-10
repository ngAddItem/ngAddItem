import { Component, OnInit, OnDestroy } from '@angular/core';
import { Requisition } from '../model/requisition.model';
import { RequisitionService } from '../model/requisition.service';
import { plainToClass } from 'class-transformer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requisition-dashboard',
  templateUrl: './requisition-dashboard.component.html',
  styleUrls: ['./requisition-dashboard.component.css']
})
export class RequisitionDashboardComponent implements OnInit, OnDestroy {
  requisitions: Requisition[];
  selectedRequisition: Requisition;

  constructor(
    private requistionService: RequisitionService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.requistionService.getRequisitions()
      .then(response => this.requisitions = plainToClass(Requisition, response))
  }
  ngOnDestroy() {
    this.requistionService.currentRequisition = this.selectedRequisition;
 }
  openRequisition() {
    this.requistionService.currentRequisition = this.selectedRequisition;
    this.route.navigate(['requisition/detail']);
  }
}
