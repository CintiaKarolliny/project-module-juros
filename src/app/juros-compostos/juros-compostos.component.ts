import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-compostos',
  templateUrl: './juros-compostos.component.html',
  styleUrls: ['./juros-compostos.component.css'],
})
export class JurosCompostosComponent implements OnInit {
  qtMes: number;
  indice: number;
  capital: number;
  calculo: number;

  calcular() {
    this.calculo = Math.round(
      Math.pow(1 + this.indice / 100, this.qtMes) * this.capital
    );

    return this.calculo;
  }
  constructor() {}

  ngOnInit() {}
}
