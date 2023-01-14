import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const usersModule = () =>
  import('./user/user.module').then((x) => x.UserModule);

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', loadChildren: usersModule },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
