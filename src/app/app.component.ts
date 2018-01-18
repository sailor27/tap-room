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
    <div class="row keg-area">
      <div class="kegs col-lg-4 center-block" *ngFor="let keg of kegs">
        <ul>
          <li><h3>{{keg.name}}</h3></li>
          <li>Brewery: {{keg.brewery}}</li>
          <li>Price: {{keg.price}}</li>
          <li>ABV: {{keg.ABV}}</li>
          <li>IBU: {{keg.IBU}}</li>
          <li>Pints Remaining: {{keg.pintsLeft}}</li>
          <button (click)="editKeg(keg)">Edit</button>
        </ul>
      </div>
    </div><!--keg-area-->

    <div class="form" *ngIf="selectedKeg">
      <div class="form-group">
        <label>Name:</label>
        <input [(ngModel)]="selectedKeg.name">
      </div>
      <div class="form-group">
        <label>Brewery:</label>
        <input [(ngModel)]="selectedKeg.brewery">
      </div>
      <div class="form-group">
        <label>Price:</label>
        <input [(ngModel)]="selectedKeg.price" >
      </div>
      <div class="form-group">
        <label>ABV:</label>
        <input [(ngModel)]="selectedKeg.ABV">
      </div>
      <div class="form-group">
        <label>IBU:</label>
        <input [(ngModel)]="selectedKeg.IBU">
      </div>
      <div class="form-group">
        <label>Pints:</label>
        <input [(ngModel)]="selectedKeg.pintsLeft">
      </div>

      <button class="btn-sm"(click)="doneBtn()">Done</button>
    </div><!--selectedKeg form-->

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
