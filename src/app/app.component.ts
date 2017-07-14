import { Component, OnInit } from '@angular/core';
import { Requisition, requisitions } from './model/requisition.model';
import { RequisitionService } from './model/requisition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-add-item';
  requisitions: Requisition[];

  constructor(private requistionService: RequisitionService) {}

  ngOnInit(): void {
    this.requistionService.getRequisitions().then(response => this.requisitions = response).then(i => console.log(i));
  }

}
