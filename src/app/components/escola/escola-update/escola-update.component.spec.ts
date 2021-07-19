import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolaUpdateComponent } from './escola-update.component';

describe('EscolaUpdateComponent', () => {
  let component: EscolaUpdateComponent;
  let fixture: ComponentFixture<EscolaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolaUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
