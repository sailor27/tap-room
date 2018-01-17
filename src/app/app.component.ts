import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentKeg: string = 'Kegs';
  kegs: Keg [] = [
    new Keg('Pliny the Younger', 'Russian River', '$6.50', '10.25%', '58'),
    new Keg('LSD', 'Lompoc', '$5.50', '6.9%', '90')
  ];
  testKeg(){
    this.kegs.push(new Keg ('Sailors Beer', 'Brewery  Co.', '$2.00', '6%', '45'));
  }
  addKeg(name, brewery, price, ABV, IBU){
    this.kegs.push(new Keg(name, brewery, price, ABV, IBU));
    console.log(this.addKeg(name, brewery, price, ABV, IBU));
  }
}

export class Keg {
  constructor(public name: string, public brewery: string, public price: string, public ABV: string, public IBU: string) { }
}
