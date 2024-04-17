import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //rota
import { PoPageModule,PoTableModule,PoNotificationService,PoTableAction } from '@po-ui/ng-components';
import { FornecedorListService } from './fornecedor-list.service';

@Component({
  selector: 'app-fornecedor-list',
  standalone: true,
  imports: [PoPageModule,PoTableModule ],
  templateUrl: './fornecedor-list.component.html',
  styleUrl: './fornecedor-list.component.css'
})
export class FornecedorListComponent implements OnInit {
  supplierList: Array<any> = new Array();
  colunasTable: Array<any> = new Array();

  constructor(private FornecedorListService: FornecedorListService,
    private router: Router,
    private poNotification: PoNotificationService) { }

  //Adicionado ação deleter e editar
  actions: Array<PoTableAction> = [
    { action: this.updateSupplier.bind(this), icon: 'po-icon-edit', label: 'Alterar Fornecedor'},
    { action: this.deleteSupplier.bind(this), icon: 'po-icon-delete', label: 'Excluir Fornecedor' }
  ];

  //método para editar
  updateSupplier(row: any) {
    console.log('Edit');
    const supplierId = row.code + row.storeId;
    this.router.navigate([`/fornecedorform/${supplierId}/${row.type}`]);
  }
    
  //método para deleter o fornecedor
  deleteSupplier(row: any) {
    console.log('deleteSupplier');
    const supplierId = row.code + row.storeId;
    this.FornecedorListService
    .deleteSupplier(supplierId, row.type)
    .subscribe(() => {
      this.updateSupplierList(); //atualiza a lista
      this.poNotification.success('o Fornecedor foi excluido com sucesso');
    }
    , err => this.poNotification.error(err)); //exibe erro 
  }

  ngOnInit(): void {
    this.updateSupplierList(); //busca a lista de fornecedores do nosso Api
    this.colunasTable = this.FornecedorListService.getColumns(); //atualiza as colunas que queremos ser listadas em nossa tabela.
  }
  //Metódo responsável por se isncrever no serviço e atualizar a lista de fornecedores
  updateSupplierList(): void {
    this.FornecedorListService.getSupplierList().subscribe(response => {
      this.supplierList = response.items;
    });
  }
}
  
