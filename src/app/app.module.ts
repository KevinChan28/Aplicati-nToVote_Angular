import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeUserComponent } from './User/home-user/home-user.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CandidatoComponent } from './User/home-user/applicant/candidato/candidato.component';
import { HomeFuncionarioComponent } from './funcionario/home-funcionario/home-funcionario.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';

import { GraficaPastelComponent } from './funcionario/home-funcionario/graficas/grafica-pastel/grafica-pastel.component';
import { GraficaAdminComponent } from './admin/grafica/grafica-admin/grafica-admin.component';
import { JwtInterceptor } from './security/jwt.interceptor';

import { CrearFuncionarioDialogComponent } from './admin/home-admin/dialog/crear-funcionario-dialog/crear-funcionario-dialog.component';
import { CrearPartidoPoliticoDialogComponent } from './admin/home-admin/dialog/crear-partido-politico-dialog/crear-partido-politico-dialog.component';

PlotlyModule.plotlyjs = PlotlyJS;
@NgModule({ declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeUserComponent,
        CandidatoComponent,
        HomeFuncionarioComponent,
        GraficaPastelComponent,
        HomeAdminComponent,
        GraficaAdminComponent,
        CrearFuncionarioDialogComponent,
        CrearPartidoPoliticoDialogComponent
    ],
    bootstrap: [AppComponent], 
    imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        PlotlyModule,
        MatSnackBarModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule
    ], 
        providers: [provideHttpClient(withInterceptorsFromDi()),
            {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
        ] })
export class AppModule { }
