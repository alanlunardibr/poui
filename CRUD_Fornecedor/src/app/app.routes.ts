import { Routes } from '@angular/router';
import { FornecedorListComponent } from './fornecedor-list/fornecedor-list.component';
import { FornecedorFormComponent } from './fornecedor-form/fornecedor-form.component';

export const routes: Routes = [
    { path: '', component: FornecedorListComponent }, //lista de fornecedor
    { path: 'fornecedor', component: FornecedorListComponent }, //lista de fornecedor
    { path: 'fornecedorform', component: FornecedorFormComponent }, //form do fornecedor - Incluir
    { path: 'fornecedorform/:id/:type', component: FornecedorFormComponent }, //form do fornecedor - Editar
];
