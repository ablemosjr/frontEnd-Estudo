import { Component, OnInit } from '@angular/core';
import { Produto } from '../objetos/Produto';

import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private produtoService: ProdutoService) {}

  produtos: Array<Produto> = []
  carregarLoading: boolean = false

  ngOnInit(): void {

    this.produtoService.listar().subscribe(prods => {
      setTimeout(() => {
        this.carregarLoading = true
        this.produtos = prods
      }, 1000)
    });
  }

  excluirItem = (id: any) => {
    this.produtoService.excluir(id).subscribe(
      sucess => console.log('Deletou'),
      error => console.log('Deu ruim'),
      () => console.log('Requisição completa')
      )
      this.ngOnInit()
  }
}
