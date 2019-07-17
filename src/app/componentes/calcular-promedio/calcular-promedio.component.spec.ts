import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularPromedioComponent } from './calcular-promedio.component';

describe('CalcularPromedioComponent', () => {
  let component: CalcularPromedioComponent;
  let fixture: ComponentFixture<CalcularPromedioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcularPromedioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcularPromedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
