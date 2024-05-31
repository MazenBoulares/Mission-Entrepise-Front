import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent {

  public isShow: boolean = false;
  public inputType: string = 'password';

  showPassword(){
    this.isShow =! this.isShow;
    if(this.isShow){
      this.inputType = 'text'
    }else{
      this.inputType ='password'
    }
  }
}
