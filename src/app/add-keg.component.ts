import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: `add-keg`,
  template: `
  <div class="form">
    <div class="form-group">
      <label>Name:</label>
      <input #newName>
    </div>
    <div class="form-group">
      <label>Brewery:</label>
      <input #newBrewery>
    </div>
    <div class="form-group">
      <label>Price:</label>
      <input #newPrice>
    </div>
    <div class="form-group">
      <label>ABV:</label>
      <input #newABV>
    </div>
    <div class="form-group">
      <label>IBU:</label>
      <input #newIBU>
    </div>
    <div class="form-group">
      <label>Pints:</label>
      <input #newPintsLeft>
    </div>

    <button class="btn-sm"(click)="submitForm(newName.value, newBrewery.value, newPrice.value, newABV.value, newIBU.value, newPintsLeft.value)">Add</button>
  </div><!--selectedKeg form-->
  `
})

export class AddKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name:string, brewery:string, price:string, ABV:string, IBU:string, pintsLeft:number) {
    var newKegToAdd: Keg = new Keg(name, brewery, price, ABV, IBU, pintsLeft);
    this.newKegSender.emit(newKegToAdd);
  }
}
