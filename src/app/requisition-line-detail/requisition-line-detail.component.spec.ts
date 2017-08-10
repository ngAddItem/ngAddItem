import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitionLineDetailComponent } from './requisition-line-detail.component';

describe('RequisitionLineDetailComponent', () => {
  let component: RequisitionLineDetailComponent;
  let fixture: ComponentFixture<RequisitionLineDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisitionLineDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitionLineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
