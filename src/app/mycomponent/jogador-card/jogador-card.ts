import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Jogador } from '../../../shared/models/jogador';

@Component({
  selector: 'app-jogador-card',
  templateUrl: './jogador-card.html',
  standalone: true
})
export class JogadorCardComponent {
  @Input() jogador!: Jogador;
  @Output() escalar = new EventEmitter<void>();
}

