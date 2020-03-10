import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html'
})
export class TopBarComponent {

  constructor(public app: AppComponent) {}

}
