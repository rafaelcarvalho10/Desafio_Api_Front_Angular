import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Escola } from './escola.model';

@Injectable({
  providedIn: 'root',
})
export class EscolaService {
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  create(codigo: number, nome: string): Observable<Escola> {
    const obj = { codigo: codigo, nome: nome };
    return this.http.post<Escola>(`${environment.apiUrl}/Escola`, obj);
  }

  put(id: string, codigo: number, nome: string): Observable<Escola> {
    const obj = { id: id, codigo: codigo, nome: nome };
    return this.http.put<Escola>(`${environment.apiUrl}/escola/${id}`, obj);
  }

  read(): Observable<Escola[]> {
    return this.http.get<Escola[]>(`${environment.apiUrl}/escola`);
  }

  readId(id: string): Observable<Escola> {
    return this.http.get<Escola>(`${environment.apiUrl}/escola/${id}`);
  }

  delete(id: string): Observable<Escola> {
    const obj = { id: id };
    return this.http.delete<Escola>(`${environment.apiUrl}/escola/${id}`);
  }
}
