import { Component, OnInit } from '@angular/core';
import { Requisition } from './model/requisition.model';
import { RequisitionService } from './model/requisition.service';
import { plainToClass } from 'class-transformer';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  requisitions: Requisition[];
  selectedRequisition: Requisition;

  constructor(private requistionService: RequisitionService,
              private route: Router) {}

  ngOnInit(): void {
    this.requistionService.getRequisitions()
      .then(response => this.requisitions = plainToClass(Requisition, response))
      .then(i => console.log(i));
  }
  openDashboard() {
    this.requistionService.currentRequisition = this.selectedRequisition;
    this.route.navigate(['requisition']);
  }
}
