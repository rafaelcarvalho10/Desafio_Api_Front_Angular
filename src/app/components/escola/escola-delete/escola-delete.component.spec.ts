import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolaDeleteComponent } from './escola-delete.component';

describe('EscolaDeleteComponent', () => {
  let component: EscolaDeleteComponent;
  let fixture: ComponentFixture<EscolaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolaDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
