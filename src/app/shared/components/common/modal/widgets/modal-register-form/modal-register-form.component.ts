import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-register-form',
  templateUrl: './modal-register-form.component.html',
  styleUrls: ['./modal-register-form.component.scss']
})
export class ModalRegisterFormComponent {

  @Input() tagClass: string;
  @Input() buttonClass: string;

  public isShow: boolean = false;
  public inputType: string = 'password';

  constructor(public modal: NgbModal){}

  showPassword() {
    this.isShow = !this.isShow;
    if (this.isShow) {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }
}
