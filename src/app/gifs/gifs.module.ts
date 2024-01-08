import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule],
  exports: [HomePageComponent],
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent
  ],
  providers: [],
})
export class GifsModule { }
