import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api/public_api';
import { StorageService } from 'src/app/shared/services/storage.service';

interface Columns {
  field: string;
  header: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  cols: Columns[];

  list: any[];
  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.cols = [
      { field: 'nomeDoItem', header: 'Nome do Item' },
      { field: 'quantidade', header: 'Quantidade' },
      { field: 'preco', header: 'Preço' },
      { field: 'produtoPericivel', header: 'Produto Pericivel' },
      { field: 'dataValidade', header: 'Data de Validade' },
      { field: 'dataFabricacao', header: 'Data de Fabricacao' }
    ];

    this.list = this.getList();
  }

  getList() {
    const list = this.storageService.getItem('item') as Array<any>;
    return this.storageService.getItem('item');
  }

  formatQuantidade(value: string, index: number) {
    value = this.validaQuantidade(value, index);
    return value;
  }

  formatPreco(value: string) {
    return `R$ ${/^\d{0,8}(\.\d{1,4})?$/g.exec(value).input}`;
  }

  formatData(value: string) {
    // O formato da data contida na variável "data" é dd/mm/yyyy
    const split = new Date(value).toLocaleDateString().split('/');
    return `${split[1]}/${split[0]}/${split[2]}`;
  }

  validaQuantidade(quantidade: string, index: number) {
    const medida = this.list[index].unidadeDeMedida as string;
    if (medida === 'kg' || medida === 'lt') {
      return `${/\d+(\.\d{1,2})?/g.exec(quantidade).input} ${medida}`;
    } else if (medida === 'un') {
      return `${quantidade} ${medida}`;
    }
  }
}
