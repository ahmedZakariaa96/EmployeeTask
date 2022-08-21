import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeGuard } from '../api-authorization/authorize.guard';
import { TokenComponent } from './token/token.component';
import { EmployeeComponent } from './Setup/Employee/Employee.component';

export const routes: Routes = [

  { path: 'token', component: TokenComponent, canActivate: [AuthorizeGuard] },
  { path: 'employee', component: EmployeeComponent, canActivate: [AuthorizeGuard] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
