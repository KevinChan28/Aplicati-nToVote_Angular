import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApiCurpService } from '../services/api-curp.service';
import { CurpValidationService } from '../services/curp-validation.service';
import { state } from '@angular/animations';
import { InegiApiService } from '../services/inegi-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [CurpValidationService]
})
export class RegisterComponent implements OnInit {

  estados: any[] | undefined;
  municipios: any[] | undefined;
  selectedEstado: string | undefined;
  inputsBlocked = true;
  registerForm: FormGroup;

  constructor(
    public apiCurp: ApiCurpService,
    private router: Router,
    private formBuilder: FormBuilder,
    public snackBar: MatSnackBar,
    private curpValidationService: CurpValidationService,
    private inegiService: InegiApiService
  ) {
    this.registerForm = this.formBuilder.group({
      section: [{value: '', disabled: true}, Validators.required],
      curp: ['', Validators.required], // Ajusta según tus necesidades
      email: [{value: '', disabled: true}, [Validators.email, Validators.required]],
      password: [{value: '', disabled: true}, Validators.required],
      estado: [{value: '', disabled: true}], // Agrega un campo para el estado seleccionado
      location: [{value: '', disabled: true}]
    });
  }

  ngOnInit(): void {
  
  }


  goLogin(){
    this.router.navigate(['/login']);
  }

  register(){

  }

  validateCurp(){
      const curp = this.registerForm.value.curp;
      this.apiCurp.ValidateCurp(curp).subscribe( response => {
       if(response.status === 200){
        console.log(response);
        this.registerForm.get('section')?.enable();
        this.registerForm.get('email')?.enable();
        this.registerForm.get('password')?.enable();
        this.registerForm.get('estado')?.enable();
        this.registerForm.get('location')?.enable();
        this.inputsBlocked = false; // Desbloquea los inputs
        this.snackBar.open('CURP Válida', 'Cerrar', {
          duration: 2000,
        });
        this.inputsBlocked = false;
       }else{
        this.inputsBlocked = true;
       }
      });
  }

  onCurpInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    inputElement.value = inputElement.value.toUpperCase();
    this.registerForm.patchValue({ curp: inputElement.value });
  }


}
