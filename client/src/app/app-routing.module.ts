import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AdminGuard} from "./admin-guard.service";
import {ConfirmEmailComponent} from "./confirm-email/confirm-email.component";
import {IndexComponent} from "./index/index.component";

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user/confirm', component: ConfirmEmailComponent, data: { token: ':token' } }
  // { path: 'admin', canActivate: [AdminGuard], loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
