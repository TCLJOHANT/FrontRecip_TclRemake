import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminViewsRoutingModule } from './admin-views-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { CrudModule } from '../pages/crud/crud.module';


@NgModule({
  declarations: [
    UsersListComponent,
    RecipesListComponent
  ],
  imports: [
    CommonModule,
    AdminViewsRoutingModule,
    CrudModule //modulo abstrto para crud
  ]
})
export class AdminViewsModule { }
