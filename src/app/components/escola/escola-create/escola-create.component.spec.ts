import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolaCreateComponent } from './escola-create.component';

describe('EscolaCreateComponent', () => {
  let component: EscolaCreateComponent;
  let fixture: ComponentFixture<EscolaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
