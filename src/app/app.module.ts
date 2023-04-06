import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './root/root.component';
import { FormsModule } from '@angular/forms';
import { JurosCompostosComponent } from './juros-compostos/juros-compostos.component';
import { JurosSimplesComponent } from './juros-simples/juros-simples.component';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule],
  declarations: [RootComponent, JurosCompostosComponent, JurosSimplesComponent],
  bootstrap: [RootComponent],
})
export class AppModule {}
