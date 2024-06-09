import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Login } from '../Models/Login';

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

constructor(/*public apiAuth: ApiAuthService*/ private router: Router, private formBuilder: FormBuilder, 
    public snackBar: MatSnackBar )
{
  /*if(this.apiAuth.usuarioData){
        this.router.navigate(['/'])
    }*/
}

ngOnInit() {
    
}
 
login(){
    const loginData: Login = {
        email: this.loginForm.value.email || null,
        password: this.loginForm.value.password || null
      };
   /* this.apiAuth.login(loginData).subscribe(response => {

        if (response.exito === false) {
            this.snackBar.open(response.mensaje,'',{
                duration: 3000
            });
        }
        if (response.exito === true){
            this.router.navigate(['/']);
            this.snackBar.open(response.mensaje,'',{
                duration: 2000
            });
        } 
    });*/
        this.router.navigate(['/homeUser']);
      

}

goRegister(){
  this.router.navigate(['/register']);
}

}
