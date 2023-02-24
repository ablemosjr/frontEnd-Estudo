import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Produto } from '../objetos/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private readonly API = `${environment.API}produtos`

  constructor(private $http: HttpClient) { }

  listar() {
    return this.$http.get<Produto[]>(`${this.API}`)
  }

  excluir(id: any) {
    return this.$http.delete(`${this.API}/${id}`)
  }

  adicionar(prod: Produto) {
    return this.$http.post(this.API, prod)
  }
}
