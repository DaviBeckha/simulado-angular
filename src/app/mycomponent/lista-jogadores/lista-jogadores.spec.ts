import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaJogadores } from './lista-jogadores';

describe('ListaJogadores', () => {
  let component: ListaJogadores;
  let fixture: ComponentFixture<ListaJogadores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaJogadores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaJogadores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
