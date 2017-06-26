import { Component } from '@angular/core';
import { Requisition, requisitions } from './model/requisition.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-add-item';
  req = requisitions[0];
}
