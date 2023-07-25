import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css'],
})
export class CardPricingComponent {
  @Input() gameType: string = '';
  @Input() gamePrice: number = 0;

  constructor() {}

  convertToBRL(price: number): string {
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return formatter.format(price);
  }
}
