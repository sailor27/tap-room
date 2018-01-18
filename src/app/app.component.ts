import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taproom';

  kegs: Keg [] = [
    new Keg('Pliny the Younger', 'Russian River', '$6.50', '10.25%', '58', 100),
    new Keg('LSD', 'Lompoc', '$5.50', '6.9%', '90', 50)
  ];

  selectedKeg = null;

  doneBtn() {
    this.selectedKeg = null;
  }

  editKeg(clickedKeg){
    this.selectedKeg = clickedKeg;
  }

  addKeg(){
    const newKeg = new Keg('', '', '', '', '', 124);
    this.kegs.push(newKeg);
    this.selectedKeg = newKeg;
  }

}

export class Keg {
  constructor(public name: string, public brewery: string, public price: string, public ABV: string, public IBU: string, public pintsLeft: number) {

  }
}
