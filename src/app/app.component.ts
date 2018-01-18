import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <!--Main-->
  <div class="container">
    <h1>  Welcome to The Tap Room</h1>


    <h2>Taps Available Now: </h2>

    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>

    <edit-keg [childSelectedKeg]="selectedKeg" (clickSender)="doneBtn($event)"></edit-keg>

    <add-keg (newKegSender)="addKeg($event)"></add-keg>
  </div><!--container-->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taproom';
  selectedKeg = null;
  masterKegList: Keg [] = [
    new Keg('Pliny the Younger', 'Russian River', '$6.50', '10.25%', '58', 100),
    new Keg('LSD', 'Lompoc', '$5.50', '6.9%', '90', 50)
  ];


  editKeg(clickedKeg){
    this.selectedKeg = clickedKeg;
  }
  doneBtn() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg){
    this.masterKegList.push(newKegFromChild);

  }

}
