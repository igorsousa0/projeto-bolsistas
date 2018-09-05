import { Component, OnInit } from '@angular/core';
import { Campo } from './bolsista';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bolsistaspage',
  templateUrl: './bolsistaspage.component.html',
  styleUrls: ['./bolsistaspage.component.css']
})
export class BolsistaspageComponent  {

  private readonly API = 'http://localhost:3000/campos';

  campos: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.campos = this.http.get(this.API).subscribe(data => {
      this.campos = data as string [];
    },
    data => {
      this.campos = data as string [];	 
    }
    }
  }

