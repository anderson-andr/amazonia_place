import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end';

  cores = ['#6184FF', '#64F59A', '#FFF064','#FF9D75','#CE6BFF']; // Lista de cores
  corDoTexto = this.cores[0]; // Cor inicial
  private intervalId: any;
  private currentIndex = 0;
  constructor() { }

  ngOnInit() {
    // Iniciar um intervalo que atualiza a cor automaticamente a cada 2 segundos (ou o intervalo que desejar)
    this.intervalId = setInterval(() => {
      this.mudarCorTextoAutomaticamente();
    }, 1000); // 2000 milissegundos = 2 segundos
  }

  ngOnDestroy() {
    // Limpar o intervalo quando o componente for destruído
    clearInterval(this.intervalId);
  }

  mudarCorTextoAutomaticamente() {
    this.currentIndex++;

    // Se chegou ao final da lista, reiniciar para a primeira cor
    if (this.currentIndex === this.cores.length) {
      this.currentIndex = 0;
    }

    this.corDoTexto = this.cores[this.currentIndex];
  }
}
