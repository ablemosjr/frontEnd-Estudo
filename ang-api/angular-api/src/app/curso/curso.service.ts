import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Curso } from './curso';
import { ApiResposta } from '../api-resposta';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url = 'http://localhost/api/php/';
  vetor: Curso[] = [];

  constructor(private http: HttpClient) { }

  obterCursos(): Observable<Curso[]> {
    return this.http.get<ApiResposta>(this.url + 'listar.php').pipe(
      map((res) => {
        this.vetor = res.cursos;
        return this.vetor;
      })
    );
  }

  cadastrarCurso(c: Curso): Observable<Curso[]> {
    return this.http.post<ApiResposta>(this.url + 'cadastrar.php', { cursos: c }).pipe(
      map((res) => {
        const c = res.cursos;

        c.forEach((curso) => {
          this.vetor.push(curso);
        });
        return this.vetor;
      })
    );
  }

  removerCurso(c: Curso): Observable<Curso[]> {
    const params = new HttpParams().set('idCurso', c?.idCurso?.toString() ?? '');

    return this.http.delete<ApiResposta>(this.url + 'excluir.php', {params: params}).pipe(map((res) => {
      const filtro = this.vetor.filter((curso) => {
        return curso.idCurso && c.idCurso && +curso?.idCurso !== +c.idCurso;
      });

      return this.vetor = filtro;
    }))
  }

  atualizarCurso(c: Curso): Observable<Curso[]> {
    return this.http.put<ApiResposta>(this.url + 'alterar.php', {cursos: c}).pipe(map((res) => {
      const cursoAlterado = this.vetor.find((item) => {
        return item.idCurso === c.idCurso;
      });

      if (cursoAlterado) {
        cursoAlterado.nomeCurso = c.nomeCurso;
        cursoAlterado.valorCurso = c.valorCurso;
      }

      return this.vetor;
    }));
  }
}
