import { Component, OnInit } from '@angular/core';
import { CursoService } from './curso.service';
import { Curso } from './curso';
import { HttpClient } from '@angular/common/http';
import { ApiResposta } from '../api-resposta';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit{

  vetor: Curso[] = [];
  curso = new Curso();

  constructor(private cursoService: CursoService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.selecao();
  }

  cadastro() {
    this.cursoService.cadastrarCurso(this.curso).subscribe(
      (res: Curso[]) => {
        this.vetor = res;

        this.curso.nomeCurso = null;
        this.curso.valorCurso = null;

        this.selecao();
      }
    );
  }

  selecao(): void {
    this.cursoService.obterCursos().subscribe(
      (res: Curso[]) => {
        this.vetor = res;
      }
    );
  }

  alterar() {
    this.cursoService.atualizarCurso(this.curso).subscribe(
      (res) => {
        this.vetor = res;

        this.curso.nomeCurso = null;
        this.curso.valorCurso = null;

        this.selecao();
      }
    );
  }

  remover() {
    this.cursoService.removerCurso(this.curso).subscribe(
      (res: Curso[]) => {
        this.vetor = res;

        this.curso.nomeCurso = null;
        this.curso.valorCurso = null;
      }
    );
  }

  selecionarCurso(c: Curso) {
    this.curso.idCurso = c.idCurso;
    this.curso.nomeCurso = c.nomeCurso;
    this.curso.valorCurso = c.valorCurso;
  }

}
