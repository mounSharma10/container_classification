import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingDoc } from './pending-doc';

describe('PendingDoc', () => {
  let component: PendingDoc;
  let fixture: ComponentFixture<PendingDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingDoc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
