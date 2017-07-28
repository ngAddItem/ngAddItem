import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Requisition } from './requisition.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RequisitionService {
  private requisitionUrl = 'http://localhost:3000/requisitions';  // URL to web api

  constructor(private http: Http) { }

  getRequisitions(): Promise<any> {
    return this.http.get(this.requisitionUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
