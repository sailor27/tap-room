import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <!--Main-->
  <div class="container">
    <h1>  Welcome to The Tap Room</h1>
    <div class="add-keg">
      <button (click)="addKeg()">Add New Keg</button>
    </div>

    <h2>Taps Available Now: </h2>

    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>

    <edit-keg [childSelectedKeg]="selectedKeg" (clickSender)="doneBtn($event)"></edit-keg>
  </div><!--container-->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taproom';

  masterKegList: Keg [] = [
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
