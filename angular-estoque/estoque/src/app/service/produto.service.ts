import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Produto } from '../objetos/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  //private readonly api = `${environment.API}produtos` (TS2339)
  private readonly API = 'http://localhost:3000/produtos'

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

  editar(prod: Produto) {
    return this.$http.put(`${this.API}/${prod.id}`, prod)
  }

  buscar(id: any) {
    return this.$http.get<Produto>(`${this.API}/${id}`)
  }
}
