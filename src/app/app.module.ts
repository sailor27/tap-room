import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { KegListComponent } from './keg-list.component';
import { EditKegComponent } from './edit-keg.component';
import { AddKegComponent } from './add-keg.component';

@NgModule({
  imports: [
    BrowserModule, FormsModule
  ],
  declarations: [
    AppComponent, KegListComponent, EditKegComponent, AddKegComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
