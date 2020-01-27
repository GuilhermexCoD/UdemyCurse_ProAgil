import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: any = [
    {
      EventoId: 1,
      Tema: 'Angular',
      Local: 'Belo Horizonte'
    },
    {
      EventoId: 2,
      Tema: '.NET CORE',
      Local: 'Sao Paulo'
    }, 
    {
      EventoId: 3,
      Tema: 'Angular e .NET CORE',
      Local: 'Rio de Janiero'
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
