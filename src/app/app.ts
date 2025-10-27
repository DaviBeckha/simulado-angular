import { Component } from '@angular/core';
import { NavbarComponent } from './mycomponent/navbar/navbar';
import { ListaJogadoresComponent } from './mycomponent/lista-jogadores/lista-jogadores';
import { EscaladosComponent } from './mycomponent/escalados/escalados';
import { Jogador } from '../shared/models/jogador';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ListaJogadoresComponent, EscaladosComponent],
  templateUrl: './app.html'
})
export class AppComponent {

 

  jogadores = [
    new Jogador(1,'Adriano', 41, 10, 'ATA', 'adriano.jpg'),
    new Jogador(2,'Ronaldo', 45, 9, 'ATA', 'ronaldo.jpg'),
    new Jogador(3, 'Cristiano Ronaldo', 39, 7, 'ATA', 'cr7.jpg'),
    new Jogador(4, 'Balotelli', 34, 45, 'ATA', 'balotelli.jpg'),
    new Jogador(5, 'Seedorf', 48, 10, 'MEI', 'seedorf.jpg'),
    new Jogador(6, 'Renato', 44, 8, 'MEI', 'renato.jpg'),
    new Jogador(7, 'O Bruxo', 45, 10, 'MEI', 'bruxo.jpg'),
    new Jogador(8, 'Bebeto', 59, 20, 'ATA', 'bebeto.jpg'),
    new Jogador(9, 'Freky', 27, 13, 'ATA', 'freky.avif'),
    new Jogador(10, 'Catjam', 23, 17, 'MEI', 'catjam.avif'),
    new Jogador(11, 'Hackermans', 29, 4, 'ZAG', 'hackermans.avif'),
    new Jogador(12, 'Benzema', 38, 9, 'ATA', 'benzema.jpg'),
    new Jogador(13, 'Kahn', 56, 1, 'GOL', 'kahn.jpg'),
    new Jogador(14, 'Pelé', 82, 10, 'ATA', 'rei.jpg'),
    new Jogador(15, 'Buffon', 47, 1, 'GOL', 'buffon.jpg'),
    new Jogador(16,'Roberto Carlos', 52, 6, 'LAT', 'r6.jpg'),
    new Jogador(17, 'Taffarel', 59, 12, 'GOL', 'taffarel.jpg'),
    new Jogador(18, 'Maradona', 63, 10, 'MEI', 'maradona.jpg')
  ];
escalados: Jogador[] = [];

  onEscalar(jogador: Jogador) {
    this.escalados.push(jogador);
    this.jogadores = this.jogadores.filter(j => j.id !== jogador.id);
  }



}

