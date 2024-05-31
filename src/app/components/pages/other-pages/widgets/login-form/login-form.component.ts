import { Component } from '@angular/core';
import {catchError, of, tap} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../../../services/authenticationService/authentication.service";
import {Router} from "@angular/router";
import {Environment} from "../../../../../environments/environment";
import {LocalStorageService} from "../../../../../services/localStorageService/local-storage.service";
import {User} from "../../../../../classes/user";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {

  loginForm: FormGroup;
  public isShow: boolean = false;
  public inputType: string = 'password';
  private userData : User | null;
  constructor(private authService: AuthenticationService,private localStorageService: LocalStorageService,
              private formBuilder:FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });
    this.localStorageService.clearStorage();
  }


    login(): void {
        if (this.loginForm.valid) {
            const { username, password } = this.loginForm.value;
            this.authService.login(username, password).pipe(
                tap((response) => {
                    console.log('Login successful');
                    console.log(response);

                    // Retrieve user data from response
                    const userData = response.body; // Assuming response body contains user data
                    if (userData) {
                        // Store user ID in local storage
                        localStorage.setItem('userId', userData.userId);
                        console.log("jjjjjjjjjj",userData.userId)

                        this.router.navigate(['/agent/submit-property']);
                    } else {
                        console.error('User data not found in login response');
                    }
                }),
                catchError((error) => {
                    console.error('Login failed', error);
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
