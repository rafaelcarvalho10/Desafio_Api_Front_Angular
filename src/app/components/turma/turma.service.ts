import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Turma } from './turma.model';

@Injectable({
  providedIn: 'root',
})
export class TurmaService {
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  // create(codigo: number, nome: string): Observable<Turma> {
  //   const obj = { codigo: codigo, nome: nome };
  //   return this.http.post<Turma>(`${environment.apiUrl}/turma`, obj);
  // }

  create(turma: Turma): Observable<Turma> {
    let request = JSON.stringify({
      codigo: turma.codigo,
      nome: turma.nome,
      escolaId: turma.escolaId,
    });
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<Turma>(
      `${environment.apiUrl}/turma`,
      request,
      httpOptions
    );
  }

  // create(codigo: number, nome: string, escolaId: string): Observable<Turma> {
  //   const obj = { codigo: codigo, nome: nome, escolaId: escolaId };
  //   return this.http.post<Turma>(`${environment.apiUrl}/turma`, obj);
  // }

  put(id: string, codigo: number, nome: string): Observable<Turma> {
    const obj = { id: id, codigo: codigo, nome: nome };
    return this.http.put<Turma>(`${environment.apiUrl}/turma/${id}`, obj);
  }

  read(): Observable<Turma[]> {
    return this.http.get<Turma[]>(`${environment.apiUrl}/turma`);
  }

  readId(id: string): Observable<Turma> {
    return this.http.get<Turma>(`${environment.apiUrl}/turma/${id}`);
  }

  delete(id: string): Observable<Turma> {
    const obj = { id: id };
    return this.http.delete<Turma>(`${environment.apiUrl}/turma/${id}`);
  }
}
