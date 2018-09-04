import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.css']
})
export class DiretivaNgforComponent implements OnInit {

  nomes: string[] = ["Jean", "Lucas", "Caio"]
  

  constructor() { }

  ngOnInit() {
    for (let i=0; i<this.nomes.length; i++){
      let nome = this.nomes[i];
    }
  }

}
