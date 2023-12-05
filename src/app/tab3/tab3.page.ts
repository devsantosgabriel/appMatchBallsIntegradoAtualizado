import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  notificacoesAtivadas: boolean;
  idioma: string;

  constructor(private router: Router) {
    this.notificacoesAtivadas = true; 
    this.idioma = 'pt-BR';
  }

  salvarConfiguracoes() {
  }

  sair() {

    this.router.navigate(['/login/login']); 
  }
}
