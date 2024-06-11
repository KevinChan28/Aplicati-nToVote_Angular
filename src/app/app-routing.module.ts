import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeUserComponent } from './User/home-user/home-user.component';
import { alreadyVoteGuard } from './security/already-vote.guard';
import { HomeFuncionarioComponent } from './funcionario/home-funcionario/home-funcionario.component';
import { AuthGuard } from './security/auth.guard';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'homeUser', component: HomeUserComponent, canActivate: [AuthGuard]},
  {path: 'homeFuncionario', component: HomeFuncionarioComponent, canActivate: [AuthGuard]},
  {path: 'homeAdmin', component: HomeAdminComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
