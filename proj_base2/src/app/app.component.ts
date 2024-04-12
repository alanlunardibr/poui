import { Component, OnInit } from '@angular/core';
import { ProAppConfigService, ProJsToAdvplService } from '@totvs/protheus-lib-core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
} from '@po-ui/ng-components';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    HttpClientModule, 
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  constructor(
    private proJsToAdvplService: ProJsToAdvplService,
    private proAppConfigService: ProAppConfigService
  ) {}
  ngOnInit(): void {    
    this.carregaFiltroProtheus();    
  }
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) },
    { label: 'Sair', action: this.closeApp.bind(this) },
  ];

  private onClick() {
    alert('Clicked in menu item');
  }

  private closeApp() {
    if (this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.callAppClose();
    } else {
      alert('O App não está sendo executado dentro do Protheus.');
    }
  }

  carregaFiltroProtheus() {
    let filtro;
    //Recebe o parametro do ERP
    this.proJsToAdvplService.jsToAdvpl('receberProtheus', '');

    filtro = localStorage.getItem('parametros') ?? '';

    console.log('filtro', filtro);

  }
}
