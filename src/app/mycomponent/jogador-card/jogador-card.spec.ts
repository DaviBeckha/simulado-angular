import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogadorCard } from './jogador-card';

describe('JogadorCard', () => {
  let component: JogadorCard;
  let fixture: ComponentFixture<JogadorCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JogadorCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JogadorCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
