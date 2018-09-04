import { Campo } from './bolsistaspage/bolsista';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BolsistaspageService {

  private readonly API = 'http://localhost:3000/campos';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Campo[]>(this.API)
      .pipe(
        tap(console.log)
      )
  }
}
