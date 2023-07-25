import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CardComponent } from './card/card.component';
import { CardLabelComponent } from './card/card-label/card-label.component';
import { CardPricingComponent } from './card/card-pricing/card-pricing.component';

@NgModule({
  declarations: [CardComponent, CardLabelComponent, CardPricingComponent],
  imports: [CommonModule, RouterModule],
  exports: [CardComponent, CardLabelComponent, RouterModule],
})
export class ComponentsModule {}
