import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule],
  exports: [SidebarComponent],
  declarations: [
    SidebarComponent
  ],
  providers: [],
})
export class SharedModule { }
