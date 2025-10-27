import { Component, Input } from '@angular/core';
import { Jogador } from '../../../shared/models/jogador';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-escalados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escalados.html'
})
export class EscaladosComponent {
  @Input() escalados: Jogador[] = [];
}

