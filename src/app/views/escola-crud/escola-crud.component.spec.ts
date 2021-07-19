import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolaCrudComponent } from './escola-crud.component';

describe('EscolaCrudComponent', () => {
  let component: EscolaCrudComponent;
  let fixture: ComponentFixture<EscolaCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolaCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
