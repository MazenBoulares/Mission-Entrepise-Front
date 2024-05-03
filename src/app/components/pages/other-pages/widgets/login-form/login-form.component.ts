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
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).pipe(
          tap((response) => {
            console.log('Login successful');
            console.log(response);
            this.router.navigate(['/home']);
          }),
          catchError((error) => {
            console.log('Login failed');
            return of(error);
          })
      ).subscribe();
    }
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
