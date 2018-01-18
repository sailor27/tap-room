import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <div class="row keg-area">
      <div class="kegs col-lg-4 center-block" *ngFor="let keg of childKegList">
        <ul>
          <li><h3>{{keg.name}}</h3></li>
          <li>Brewery: {{keg.brewery}}</li>
          <li>Price: {{keg.price}}</li>
          <li>ABV: {{keg.ABV}}</li>
          <li>IBU: {{keg.IBU}}</li>
          <li>Pints Remaining: {{keg.pintsLeft}}</li>
          <button (click)="editButtonClicked(keg)">Edit</button>
          <button (click)="sellPint(keg)">Sell</button>
        </ul>
      </div>
    </div><!--keg-area-->
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  sellPint(keg){
    if (keg.pintsLeft === 0){
      return  keg.pintsLeft = 0;
    } else {
    return keg.pintsLeft -= 1;
    }

}
