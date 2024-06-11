import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Login } from '../Models/Login';
import { ApiAuthService } from '../services/APIBASE/apiUser/api-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
   });

constructor(public apiAuth: ApiAuthService, private router: Router, private formBuilder: FormBuilder, 
    public snackBar: MatSnackBar )
{
  if(this.apiAuth.usuarioData){
        this.router.navigate(['/'])
    }
}

ngOnInit() {
    
}
 
login(){
    const loginData: Login = {
      EmailOrCurp: this.loginForm.value.email || null,
        password: this.loginForm.value.password || null
      };
   this.apiAuth.login(loginData).subscribe(response => {

        if (response.success === false) {
            this.snackBar.open(response.message,'',{
                duration: 5000
            });
            console.log(response.message);
        }
        if (response.success === true){
            this.snackBar.open(response.message,'',{
                duration: 2000
            });
              console.log(response.data.rol);

            if(response.data.rol === 'Persona'){
                this.router.navigate(['/homeUser']);
            }
            if(response.data.rol === 'Funcionario'){
                this.router.navigate(['/homeFuncionario']);
            }
            if (response.data.rol === 'Administrador'){
                this.router.navigate(['/homeAdmin']);
            }
        }
        
    }); 

}

goRegister(){
  this.router.navigate(['/register']);
}

}
