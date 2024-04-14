import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-log-in-modal',
  templateUrl: './log-in-modal.component.html',
  styleUrls: ['./log-in-modal.component.scss']
})
export class LogInModalComponent {

  @Input() buttonClass: string = '';
  @Input() tagClass: string = '';
  @Input() theme: number;
  @Input() imageURL: string;

  public activeTab: string = 'login';
  public isShow: boolean = false;
  public isShow1:boolean = false;
  public inputType: string = 'password';
  public inputType1: string = 'password';


  constructor(public modal: NgbModal){}

  changeTab(value:string){
    this.activeTab = value;
  }

  showPassword(value: string) {
    if(value == 'login'){
      this.isShow = !this.isShow;
      if (this.isShow) {
        this.inputType = 'text';
      } else {
        this.inputType = 'password';
      }
    }
    if(value == 'register'){
      this.isShow1 = !this.isShow1;
      if (this.isShow1) {
        this.inputType1 = 'text';
      } else {
        this.inputType1 = 'password';
      }
    }
  }

}
