import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Jogador } from '../../../shared/models/jogador';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JogadorCardComponent } from '../jogador-card/jogador-card';

@Component({
  selector: 'app-lista-jogadores',
  standalone: true,
  imports: [CommonModule, FormsModule, JogadorCardComponent],
  templateUrl: './lista-jogadores.html'
})
export class ListaJogadoresComponent {
  @Input() jogadores: Jogador[] = [];
  @Output() escalar = new EventEmitter<Jogador>();

  filtroNome = '';
  filtroPosicao = '';
 




  get jogadoresFiltrados(): Jogador[] {
    return this.jogadores.filter(j =>
      j.nome.toLowerCase().includes(this.filtroNome.toLowerCase()) &&
      j.posicao.toLowerCase().includes(this.filtroPosicao.toLowerCase())
    );
  }
}

