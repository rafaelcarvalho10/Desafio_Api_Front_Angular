import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaReadComponent } from './turma-read.component';

describe('TurmaReadComponent', () => {
  let component: TurmaReadComponent;
  let fixture: ComponentFixture<TurmaReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurmaReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
