import { MainPageComponent } from './pages/main-page/main-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPasswordsComponent } from './pages/all-passwords/all-passwords.component';
import { DeletePasswordComponent } from './pages/delete-password/delete-password.component';
import { AddPasswordComponent } from './pages/add-password/add-password.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'all-passwords', component: AllPasswordsComponent },
  { path: 'delete', component: DeletePasswordComponent },
  { path: 'add-password', component: AddPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
