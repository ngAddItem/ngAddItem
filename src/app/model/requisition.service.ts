import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Requisition } from './requisition.model';

@Injectable()
export class RequisitionService {
  private requisitionUrl = 'http://localhost:3000/requisitions';
  private requestTypeUrl = 'http://localhost:3000/requestTypes';
  public currentRequisition: Requisition;

  constructor(private http: Http) { }

  getRequisitionsWithAllTEST(): Observable<any> {
    return this.http.get('https://swapi.co/api/people/1')
      .map(res => res.json())
      .mergeMap(character => this.http.get(character.homeworld))

  }
  getRequisitionsWithAll(): Observable<any> {
    return this.http.get(this.requisitionUrl)
      .map((res: any) => res.json())
      .flatMap((requisitions: any[]) => {
        if (requisitions.length > 0) {
          return Observable.forkJoin(
            requisitions.map((requisition: any) => {
              return this.http.get(this.requestTypeUrl + '?userId=' + requisition.userId).map((res: any) => {
                const user: any = res.json(); requisition.user = user; return requisition;
              });
            }));

        }
        return Observable.of([]);
      });
  }
  getRequisitions(): Promise<any> {
    return this.http.get(this.requisitionUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }
  getRequestTypeById(id: string): Promise<any> {
    return this.http.get(this.requestTypeUrl + '?reqeustTypeId=' + id)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
