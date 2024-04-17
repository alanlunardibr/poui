import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Supplier } from '../model/supplierModel';
@Injectable({
  providedIn: 'root'
})
export class FornecedorFormService {

  ApiRest = 'http://localhost:8084/rest/api/crm/v1/customerVendor';
  //ApiRest = '/api/crm/v1/customerVendor';



  constructor(private http: HttpClient) { }

  //Metódo para criar um novo Fornecedor
  postNewSupplier(body: string) {
    return this.http.post(this.ApiRest, body);
  }

  //Metódo para recuperar um Fornecedor
  /**type = 1 = cliente 
   *        2 = fornecedor
   *        3 = ambos
  */
  getSupplier(SupplierId: string, type: string = '2') {
    return this.http.get<Supplier>(this.ApiRest + `/${type}/${SupplierId}`);
  }

  //Metódo para Alterar um Fornecedor
  /**type = 1 = cliente 
 *        2 = fornecedor
 *        3 = ambos
*/
  putSupplier(SupplierId: string, body: string, type: string = '2') {
    return this.http.put(this.ApiRest + `/${type}/${SupplierId}`, body);
  }
}
