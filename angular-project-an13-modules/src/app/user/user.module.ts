import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './user-routing.module';
import { ListComponent } from './userlist/list.component';
import { AddEditComponent } from './addedit/add-edit.component';

@NgModule({
  declarations: [UserComponent, ListComponent, AddEditComponent],
  imports: [CommonModule, ReactiveFormsModule, UsersRoutingModule],
})
export class UserModule {}
