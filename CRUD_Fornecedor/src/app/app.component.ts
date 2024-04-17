import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProAppConfigService, ProJsToAdvplService } from '@totvs/protheus-lib-core';



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
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(
    private proJsToAdvplService: ProJsToAdvplService,
    private proAppConfigService: ProAppConfigService
  ) {}
  readonly menus: Array<PoMenuItem> = [
    {label: 'Home', link: '/fornecedor/', shortLabel: 'Home', icon: 'po-icon-home'},
    {label: 'Incluir', link: '/fornecedorform/', shortLabel: 'Incluir', icon: 'po-icon-user'},
    {label: 'Exit', link: '/', shortLabel: 'Sair',icon: 'po-icon-exit',action: this.closeApp.bind(this)}
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
}
