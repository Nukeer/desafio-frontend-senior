import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'desafio-frontend-senior';

  mobileMenuActive: boolean;

  onMobileMenuButton(event) {
    this.mobileMenuActive = !this.mobileMenuActive;
    event.preventDefault();
  }

  hideMobileMenu(event) {
    this.mobileMenuActive = false;
    event.preventDefault();
  }
}
