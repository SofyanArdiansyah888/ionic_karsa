import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instruksi',
  templateUrl: './instruksi.page.html',
  styleUrls: ['./instruksi.page.scss'],
})
export class InstruksiPage implements OnInit {

  public timer = 60;

public m = 1;

constructor() {

this.start();
}

start()

{

var IntervalVar = setInterval( function() {

  this.timer--;

  if (this.timer === 0)

   {

    this.timer = 60;

    this.m -= 1;

   }

  if (this.m === 0)

   {

    this.timer = "00";

    this.m = "00"

    clearInterval(IntervalVar);

   }

}.bind(this) , 1000)
}

ngOnInit() {

}

}
