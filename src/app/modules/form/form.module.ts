// Imports Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Imports Primeng
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { PanelModule } from 'primeng/panel';
import { MessageModule } from 'primeng/message';
import { DropdownModule } from 'primeng/dropdown';

// Other Imports
import { FormComponent } from './form.component';
import { FormRoutingModule } from './form-routing.module';
import { NgxCurrencyModule } from 'ngx-currency';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    // Imports do primeng
    InputTextModule,
    CalendarModule,
    InputMaskModule,
    ButtonModule,
    TriStateCheckboxModule,
    PanelModule,
    MessageModule,
    DropdownModule,

    // Other Imports
    NgxCurrencyModule,

    // Components
    FormRoutingModule
  ]
})
export class FormModule {}
