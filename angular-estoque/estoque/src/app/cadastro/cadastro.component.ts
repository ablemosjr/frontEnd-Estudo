import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Produto } from '../objetos/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  id: any
  produto: Produto = new Produto(0, '', 0);
  textoBotao: string = 'Salvar'

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private prodService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parametros => {
      if (parametros['id']) {
        this.textoBotao = 'Editar'
        this.id = parametros['id']
        this.prodService.buscar(this.id).subscribe(prod => {
          this.produto = prod
        })
      }
    });
  }

  adicionar = () => {
    if (this.textoBotao == 'Salvar') {
      this.prodService.adicionar(this.produto).subscribe(
        sucess => this.navegar('home'),
        error => console.log('Deu ruim'),
        () => console.log('Inclusão completa')
      )
    } else {
      this.editar()
    }
  }

  editar = () => {
    this.prodService.editar(this.produto).subscribe(
      sucess => this.navegar('home'),
      error => console.log('Deu ruim'),
      () => console.log('Alteração completa')
    )
  }

  navegar = (rota: any) => {
    this.router.navigate([rota])
  }

}
