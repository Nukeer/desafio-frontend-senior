import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ItemSidebar } from 'src/app/shared/interface/item-sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SideBarComponent implements OnInit {
  listItem: ItemSidebar[];

  constructor(public app: AppComponent) {}

  ngOnInit() {
    this.listItem = [
      { path: 'formulario', icon: '', label: 'Formulário' },
      { path: 'listagem', icon: '', label: 'Listagem' }
    ];
  }
}
