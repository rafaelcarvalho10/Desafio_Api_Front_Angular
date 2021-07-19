import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolaReadComponent } from './escola-read.component';

describe('EscolaReadComponent', () => {
  let component: EscolaReadComponent;
  let fixture: ComponentFixture<EscolaReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolaReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
