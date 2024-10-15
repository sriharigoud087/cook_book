import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingComponent } from './shopping/shopping.component';


@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingComponent
  ],
  imports: [
    CommonModule,
    ShoppingListRoutingModule,
  ]
})
export class ShoppingListModule { }
