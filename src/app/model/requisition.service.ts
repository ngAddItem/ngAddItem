import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Requisition } from './requisition.model';


  import { Observable } from 'rxjs/Rx'
  import 'rxjs/add/operator/map';
  import 'rxjs/add/operator/catch';
  import 'rxjs/add/observable/throw';
  import 'rxjs/add/operator/toPromise';

  const REQUISITIONS_API = 'http://localhost:3000/requisitions'

@Injectable()
export class RequisitionService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private requisitionUrl = 'api/requisitions';  // URL to web api

  constructor(private http: Http) { }

  getRequisitions(): Promise<any> {
    return this.http.get(REQUISITIONS_API)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
