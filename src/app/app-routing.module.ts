import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: 'repositories',
    loadChildren: 'app/repositories/repositories.module#RepositoriesModule',
  },
  {
    path: 'users',
    loadChildren: 'app/users/users.module#UsersModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
