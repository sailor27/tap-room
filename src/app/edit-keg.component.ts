import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template:  `
  <div class="form" *ngIf="childSelectedKeg">
    <div class="form-group">
      <label>Name:</label>
      <input [(ngModel)]="childSelectedKeg.name">
    </div>
    <div class="form-group">
      <label>Brewery:</label>
      <input [(ngModel)]="childSelectedKeg.brewery">
    </div>
    <div class="form-group">
      <label>Price:</label>
      <input [(ngModel)]="childSelectedKeg.price" >
    </div>
    <div class="form-group">
      <label>ABV:</label>
      <input [(ngModel)]="childSelectedKeg.ABV">
    </div>
    <div class="form-group">
      <label>IBU:</label>
      <input [(ngModel)]="childSelectedKeg.IBU">
    </div>
    <div class="form-group">
      <label>Pints:</label>
      <input [(ngModel)]="childSelectedKeg.pintsLeft">
    </div>

    <button class="btn-sm"(click)="doneButtonClicked()">Done</button>
  </div><!--selectedKeg form-->
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() clickSender = new EventEmitter();

  doneButtonClicked(deselectedKeg: Keg) {
    this.clickSender.emit(deselectedKeg);
  }
}
