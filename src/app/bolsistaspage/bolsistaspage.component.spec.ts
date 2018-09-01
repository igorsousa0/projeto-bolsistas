import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsistaspageComponent } from './bolsistaspage.component';

describe('BolsistaspageComponent', () => {
  let component: BolsistaspageComponent;
  let fixture: ComponentFixture<BolsistaspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolsistaspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolsistaspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
