import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiAuthService } from 'src/app/services/APIBASE/apiUser/api-auth.service';
import { ApiUser } from 'src/app/services/APIBASE/apiUser/apiUser.service';

@Component({
  selector: 'app-crear-funcionario-dialog',
  templateUrl: './crear-funcionario-dialog.component.html',
  styleUrls: ['./crear-funcionario-dialog.component.css']
})
export class CrearFuncionarioDialogComponent {
  formularioFuncionario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CrearFuncionarioDialogComponent>,
    private apiAuthService: ApiAuthService,
    private apiUser: ApiUser
  ) {
    this.formularioFuncionario = this.fb.group({
      curp: ['', Validators.required],
      password: ['', Validators.required],
      section: ['', Validators.required],
      location: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      state: ['', Validators.required]
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  registrarFuncionario() {
    console.log('Formulario:', this.formularioFuncionario.value);
    if (this.formularioFuncionario.valid) {
      this.apiUser.registerFuncionario(this.formularioFuncionario.value).subscribe(
        response => {
          console.log('Funcionario registrado correctamente:', response);
          this.dialogRef.close();
        },
        error => {
          console.error('Error al registrar funcionario:', error);
          // Aquí puedes agregar manejo de errores
        }
      );
    } else {
      // Marca todos los campos como tocados para mostrar mensajes de error
      Object.values(this.formularioFuncionario.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
}
