import { BolsistaspageService } from '../bolsistaspage.service';
import { Component, OnInit } from '@angular/core';
import { Campo } from './bolsista';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-bolsistaspage',
  templateUrl: './bolsistaspage.component.html',
  styleUrls: ['./bolsistaspage.component.css']
})
export class BolsistaspageComponent implements OnInit {

  campos: Campo[];

  constructor(private service: BolsistaspageService) { }

  ngOnInit() {
    this.service.list().subscribe(dados => this.service = dados);
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
  }

}
