export class Jogador {
  constructor(
    public id: number,
    public nome: string,
    public idade: number,
    public numero: number,
    public posicao: 'GOL'| 'ATA' | 'MEI' | 'ZAG'| 'LAT' | '' = '',
    public foto: string
  ) {}
}
