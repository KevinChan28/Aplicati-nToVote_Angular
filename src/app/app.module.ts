import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeUserComponent } from './User/home-user/home-user.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CandidatoComponent } from './User/home-user/applicant/candidato/candidato.component';
import { HomeFuncionarioComponent } from './funcionario/home-funcionario/home-funcionario.component';



@NgModule({ declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeUserComponent,
        CandidatoComponent,
        HomeFuncionarioComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        MatSnackBarModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
