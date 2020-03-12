import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';
import { TableModule } from 'primeng/table';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, TableModule, ScrollingModule, ListRoutingModule]
})
export class ListModule {}
