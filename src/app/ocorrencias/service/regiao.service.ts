import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Regiao } from '../model/regiao';

@Injectable({
  providedIn: 'root'
})
export class RegiaoService {

  constructor(
    private http: HttpClient,
  ) { }

  listRegiao(): Observable<Regiao[]> {
    const url = '/assets/regiao.json';
    return this.http.get<Regiao[]>(url);
  }

}
