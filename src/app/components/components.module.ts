import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CardComponent } from './card/card.component';
import { CardLabelComponent } from './card/card-label/card-label.component';

@NgModule({
  declarations: [CardComponent, CardLabelComponent],
  imports: [CommonModule, RouterModule],
  exports: [CardComponent, CardLabelComponent, RouterModule],
})
export class ComponentsModule {}
