import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule],
  exports: [
    SidebarComponent,
    LazyImageComponent],
  declarations: [
    SidebarComponent,
    LazyImageComponent
  ],
  providers: [],
})
export class SharedModule { }
