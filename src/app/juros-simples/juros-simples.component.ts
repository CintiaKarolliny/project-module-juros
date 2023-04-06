import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-simples',
  templateUrl: './juros-simples.component.html',
  styleUrls: ['./juros-simples.component.css'],
})
export class JurosSimplesComponent implements OnInit {
  indice: number;
  capital: number;
  qtMes: number;
  calculo: number;

  calcular() {
    this.calculo = Math.round(this.capital * (this.indice / 100) * this.qtMes);

    return this.calculo;
  }
  constructor() {}

  ngOnInit() {}
}
