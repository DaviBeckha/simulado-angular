import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Escalados } from './escalados';

describe('Escalados', () => {
  let component: Escalados;
  let fixture: ComponentFixture<Escalados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Escalados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Escalados);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
