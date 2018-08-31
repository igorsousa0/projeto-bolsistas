import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsistasComponent } from './bolsistas.component';

describe('BolsistasComponent', () => {
  let component: BolsistasComponent;
  let fixture: ComponentFixture<BolsistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolsistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolsistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
