import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Nummerplaat } from 'src/app/nummerplaat';

@Component({
  selector: 'app-nummerplaten-list',
  templateUrl: './nummerplaten-list.component.html'
})
export class NummerplatenListComponent implements OnInit, AfterViewInit {
  
  public items: Nummerplaat[];
  private datePipe = new DatePipe('en-US');

  constructor() {
  }

  ngAfterViewInit(): void {
    console.log(this.datePipe.transform(Date.now(), 'dd/MM/YYYY HH:mm:ss.SSS'));
  }

  ngOnInit(): void {
    var list = []
    for (var i = 0; i < 1000; i++) {
      list[i] = {
            kenteken: 'ABC' + String(i+1).padStart(4, '0'),
            landIso2Code: 'BE',
            status: 'Actief',
            vervangenDoor: '',
            alias: '',
            startDatum: new Date(Date.now()),
            eindDatum: new Date(Date.now()),
            afkeurReden: '',
            soort: 'Permanent'
        };
    }

    this.items = list;
    
    console.log(this.datePipe.transform(Date.now(), 'dd/MM/YYYY HH:mm:ss.SSS'));
  }
}