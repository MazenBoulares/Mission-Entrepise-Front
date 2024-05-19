import { Component } from '@angular/core';
import {catchError, of, tap} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../../../services/authenticationService/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {

  loginForm: FormGroup;
  public isShow: boolean = false;
  public inputType: string = 'password';

  constructor(private authService: AuthenticationService,private formBuilder:FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }


  login() {
    if (this.loginForm.invalid) {
      return;
    }
  
    const formData = this.loginForm.value;
    this.authService.login(formData.username, formData.password).subscribe({
      next: (response: any) => {
        console.log('Login successful');
        console.log(response.userId);
        localStorage.setItem("id_User_Loggedin", response.userId);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Login failed:', error);
      }
    });
  }
  showPassword() {
    this.isShow = !this.isShow;
    if (this.isShow) {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }
}
