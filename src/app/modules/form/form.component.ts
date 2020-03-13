import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CurrencyMaskConfig } from 'ngx-currency';
import { StorageService } from 'src/app/shared/services/storage.service';
import { getOptionsToCurrencyMask } from 'src/app/shared/validators/options-currency-mask';
import { Formulario } from 'src/app/shared/interface/formulario';
import { ActivatedRoute, Router } from '@angular/router';

interface PDropdown {
  label: string;
  value: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;

  unidadeMedida: PDropdown[];

  constructor(
    private storageService: StorageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      nomeDoItem: new FormControl('', [
        Validators.required,
        Validators.maxLength(50)
      ]),
      unidadeDeMedida: new FormControl('', [Validators.required]),
      quantidade: new FormControl(''),
      preco: new FormControl('', [Validators.required]),
      produtoPerecivel: new FormControl(null, [Validators.required]),
      dataValidade: new FormControl(null),
      dataFabricacao: new FormControl(null, [Validators.required])
    });

    this.unidadeMedida = [
      { label: 'Nenhum', value: '' },
      { label: 'Litro', value: 'lt' },
      { label: 'Quilograma', value: 'kg' },
      { label: 'Unidade', value: 'un' }
    ];
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const item = this.storageService.getItem('item')[id] as Formulario;
      item.dataFabricacao = new Date(item.dataFabricacao);
      item.dataValidade = new Date(item.dataValidade);
      this.form.setValue(item);
    }
  }

  // Valida se a data de fabricação é maior que a data de validade
  validaData(): boolean {
    const dataFabricacao = this.form.value.dataFabricacao as Date;
    const dataValidade = this.form.value.dataValidade as Date;
    if (
      dataValidade &&
      dataFabricacao &&
      dataFabricacao.getTime() < dataValidade.getTime()
    ) {
      return true;
    }
    return false;
  }

  // Valida se a medida e a quantidade não estão vazios
  validaQuantidade(): boolean {
    const medida = this.form.value.unidadeDeMedida as string;
    const quantidade = this.form.value.quantidade as number;

    if (medida !== '' && quantidade.toString() !== '') {
      return true;
    }
    return false;
  }

  // Valida os tipos de unidade e retorna com a validação necessária para o campo
  getOptionsToCurrencyMask(): Partial<CurrencyMaskConfig> {
    return getOptionsToCurrencyMask(this.form.value.unidadeDeMedida);
  }

  save() {
    const value = this.form.value as Formulario;
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const items = this.storageService.getItem('item');
      items[id] = value;
      this.storageService.newArrayItem('item', items);
      this.router.navigate(['/listagem']);
    } else {
      this.storageService.addItem('item', value);
      this.form.reset();
    }
  }
}
